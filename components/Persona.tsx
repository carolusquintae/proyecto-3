import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
} from "react-native";
import React from "react";
import FilaEstrellas from "./FilaEstrellas";

type persona = {
  nombre: string;
  puesto: string;
  opiniones: number;
  foto: ImageSourcePropType;
  estrellas: number;
};

export default function Persona({
  nombre,
  puesto,
  opiniones,
  foto,
  estrellas,
}: persona) {
  return (
    <View style={styles.contenedor}>
      <Image source={foto} style={styles.marcoFoto} />
      <View style={styles.contenedorSecundario}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.puesto}>{puesto}</Text>
        <View style={styles.contenedorTerciario}>
          <FilaEstrellas estrellas={estrellas}/>
          <Text style={styles.comentarios}>{opiniones} opiniones.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#fff",
    width: "auto",
    padding: 16,
    margin: 8,
    elevation: 7,
    shadowColor: "#3a7b99ff",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  marcoFoto: {
    width: 72,
    height: 72,
    borderRadius: 50,
  },
  contenedorSecundario: {
    flexDirection: "column",
    marginLeft: 16,
  },
  contenedorTerciario: {
    flexDirection: "row",
    alignItems: "center",
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  puesto: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 6,
  },
  comentarios: {
    fontSize: 12,
    color: "#9ca3af",
    marginLeft: 8,
  }
});
