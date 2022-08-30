import { useEffect, useState } from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Calendar } from "react-native-calendario";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from "moti";

export default function Calendario() {
  const [modalOpen, setModalOpen] = useState(false);
  const [treinando, setTreinando] = useState(false);
  const [descanso, setDescanso] = useState(60);
  const [contador, setContador] = useState(null);

  const count = (id) => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda De Treinos</Text>

      <MotiView
        style={styles.calendario}
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "timing",
          delay: 500,
        }}
      >
        <Calendar
          showMonthTitle={true}
          numberOfMonths={1}
          minDate={new Date()}
          startDate={new Date()}
          locale="br"
          theme={{
            monthTitleTextStyle: {
              color: "#FFF",
              fontWeight: "bold",
              fontSize: 20,
            },
            weekColumnStyle: {
              paddingVertical: 5,
            },
            weekColumnTextStyle: {
              color: "#fff",
              fontSize: 15,
            },
            dayTextStyle: {
              color: "#000",
              fontSize: 15,
            },
            activeDayContainerStyle: {
              backgroundColor: "#fff",
              borderBottomEndRadius: 0,
              borderBottomStartRadius: 0,
              borderTopEndRadius: 0,
              borderTopStartRadius: 0,
            },
            activeDayTextStyle: {
              color: "#8093f1",
            },
          }}
        />
      </MotiView>

      <MotiView
        style={styles.start}
        from={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: "timing",
          delay: 1000,
        }}
      >
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => {
            setModalOpen(true);
          }}
        >
          <Text style={styles.btnText}>INICIAR TREINO</Text>
          <Ionicons name="arrow-forward" size={24} style={styles.icon} />
        </TouchableOpacity>
      </MotiView>

      <Modal
        animationType="slide"
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(false);
        }}
      >
        <View style={styles.modalContainer}>
          {treinando === true ? (
            <Text style={styles.modalText}>GO</Text>
          ) : (
            <>
              <Text style={styles.modalText}>RELAXE</Text>
              <Text style={styles.modalText}>{descanso}</Text>
            </>
          )}
        </View>
      </Modal>

      <Text style={styles.text}>Veni Vidi, Vici</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8093f1",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 25,
  },
  text: {
    color: "#fff",
    position: "absolute",
    bottom: 90,
  },
  calendario: {
    width: "90%",
  },
  start: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
  btn: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    height: 50,
    width: "70%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 999999,
    flexDirection: "row",
  },
  btnText: {
    color: "#8093f1",
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    color: "#8093f1",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "#8093f1",
    justifyContent: "center",
    alignItems: "center",
  },

  modalText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
