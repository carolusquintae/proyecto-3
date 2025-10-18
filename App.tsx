import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FilaEstrellas from './components/FilaEstrellas';
import Titulo from './components/Titulo';
import Persona from './components/Persona';

export default function App() {
  return (
     <View style = {{marginTop : 100}}>
      <Titulo texto={"Prueba"} fontSize={28} />

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

const styles = StyleSheet.create({
});