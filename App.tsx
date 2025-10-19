import { ScrollView, StyleSheet, View } from "react-native";
import Titulo from "./components/Titulo";
import data from "./data/staff.json";
import Seccion from "./components/Seccion";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <ScrollView>
        <Titulo
          texto={"Equipo de desarrollo"}
          fontSize={36}
          style={{ marginTop: 32, alignItems: "center" }}
        ></Titulo>
        {data.map((departamento) => (
          <Seccion
            key={departamento.titulo}
            titulo={departamento.titulo}
            personal={departamento.personal}
          ></Seccion>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#dbeafe",
  },
});
