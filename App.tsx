import { StyleSheet, View } from 'react-native';
import Titulo from './components/Titulo';
import Persona from './components/Persona';
import { FOTOS } from './data/Fotos';

export default function App() {
  return (
     <View style = {styles.contenedor}>
      <Titulo texto={"Prueba"} fontSize={28} />

      <Persona
        nombre={"Lucía"}
        puesto={"Desarrolladora"}
        opiniones={5}
        foto={FOTOS["foto1"]}
        estrellas={4}
      ></Persona>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 100
  }
});