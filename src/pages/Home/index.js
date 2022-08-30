import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MotiView } from "moti";

import frases from "../../assets/frases.json";
export default function Home() {
  const [frase, setFrase] = useState("");
  useEffect(() => {
    setFrase(frases[Math.floor(Math.random() * frases.length)]);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        style={styles.content}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "timing",
          delay: 600,
        }}
      >
        <Text style={styles.frase}>Frase Do Dia:</Text>
        <Text style={styles.text}>“{frase}“</Text>
      </MotiView>
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
    fontSize: 25,
    fontStyle: "italic",
    opacity: 0.8,
  },
  frase: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 40,
    fontWeight: "bold",
    elevation: 5,
  },
});
