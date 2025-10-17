import { StyleSheet, View } from 'react-native';
import React from 'react';
import generarListaIdsEstrella from '../utils/Funciones';
import { MaterialIcons } from '@expo/vector-icons';

type FilaEstrellasProps = {
  estrellas:number
}

export default function FilaEstrellas({estrellas}: FilaEstrellasProps) {
  
  return (
    <View style={styles.fila}>
    {
      generarListaIdsEstrella(estrellas).map(e => <MaterialIcons
                                                    key={e}
                                                    name={"star"}
                                                    size={16}
                                                    color={styles.estrellaLlena.color}
                                                  />
                                    )
    }
    {
      generarListaIdsEstrella(5-estrellas).map(e => <MaterialIcons
                                                    key={e}
                                                    name={"star"}
                                                    size={16}
                                                    color={styles.estrellaVacia.color}
                                                  />
                                    )
    }
    </View>
  );
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