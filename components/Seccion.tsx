import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Titulo from './Titulo';
import Persona from './Persona';
import { FOTOS } from '../data/Fotos';

type PersonaType = {
  nombre: string;
  puesto: string;
  opiniones?: number;
  estrellas?: number;
  foto: string;
};

type SeccionProps = {
  titulo: string;
  personal: PersonaType[];
};

export default function Seccion({ titulo, personal }: SeccionProps) {
  return (
    <View>
      <Titulo texto={titulo} fontSize={28} style={{marginTop: 8}}/>
      <View style={{alignItems: "center"}}>
         {personal.map((p) => (
          <Persona
            key={p.nombre}
            nombre={p.nombre}
            puesto={p.puesto}
            opiniones={p.opiniones ?? 0}
            estrellas={p.estrellas ?? 0}
            foto={FOTOS[p.foto as keyof typeof FOTOS]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})