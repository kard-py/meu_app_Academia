import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import frases from "../../assets/frases.json";
export default function Home() {
  const [frase, setFrase] = useState("");
  useEffect(() => {
    setFrase(frases[Math.floor(Math.random() * frases.length)]);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.frase}>Frase Do Dia:</Text>
        <Text style={styles.text}>{frase}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8093f1",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  frase: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    elevation: 5,
  },
});
