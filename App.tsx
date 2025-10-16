import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Titulo from "./components/Titulo";
import Persona from "./components/Persona";

export default function App() {
  return (
    <View style = {{marginTop : 100}}>
      <Titulo texto={"Prueba"} fontSize={28} />
      <StatusBar style="auto" />

      <Persona
        nombre={"Lucía"}
        puesto={"Desarrolladora"}
        opiniones={5}
        foto={require("./assets/foto5.png")}
        estrellas={4}
      ></Persona>
    </View>
  );
}

const styles = StyleSheet.create({});
