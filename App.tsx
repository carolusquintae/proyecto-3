import { Pressable, StyleSheet, Text, View } from 'react-native';
import FilaEstrellas from './components/FilaEstrellas';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Contenedor intermedio para hacer bajar las estrellas mas pabajo</Text>
      </View>
      <FilaEstrellas estrellas={3020} />
      
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
