import { StyleSheet, Text, View } from 'react-native';
import FilaEstrellas from './components/FilaEstrellas';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Contenedor intermedio para hacer bajar las estrellas mas pabajo</Text>
      </View>
      <FilaEstrellas estrellas={1} />
      <FilaEstrellas estrellas={2} />
      <FilaEstrellas estrellas={3} />
      <FilaEstrellas estrellas={4} />
      <FilaEstrellas estrellas={5} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});