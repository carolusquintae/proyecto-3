import { StyleSheet, View } from 'react-native';
import React from 'react';
import generarListaIdsEstrella from '../utils/Funciones';
import { MaterialIcons } from '@expo/vector-icons';

export default function FilaEstrellas({estrellas}: any) {
  
  return (
    <View style={styles.fila}>
    {
      generarListaIdsEstrella(5).map(estrellas => <MaterialIcons
                                                    key={estrellas}
                                                    name={"star"}
                                                    size={16}
                                                    color={styles.estrellaVacia.color}
                                                  />
                                    )
    }
    </View>
  );
}

export function estrellasVacias() {
  
}

const styles = StyleSheet.create({
  estrellaLlena: { 
    color: "#ffd700"
  },
  estrellaVacia: {
    color: "#ccccccff"
  },
  fila: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});