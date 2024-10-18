import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>¡Hola Mundo!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff', // Fondo azul
  },
  box: {
    backgroundColor: '#000', // Fondo negro del rectángulo
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Letras blancas
  },
});
