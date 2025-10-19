import { StyleSheet, Text, View, TextStyle } from 'react-native'
import React from 'react' 
type titulo = {
    texto : String
    fontSize : number
    style?: TextStyle
}

export default function Titulo({texto, fontSize = 28} : titulo) {
  return (
    <View>
      <Text style = {[styles.textoTitulo, {fontSize}]}>{texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textoTitulo : {
        fontWeight : "bold",
        color : "#111827",
        marginBottom : 8,
        marginHorizontal : 8
    }
})