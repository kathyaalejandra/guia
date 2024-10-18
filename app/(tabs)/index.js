import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>¡Hola Mundo!</Text>
      </View>

      <Image
        source={require('../../assets/images/saludo.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#aaf386', 
  },
  box: {
    backgroundColor: '#fcba50', // Fondo negro del rectángulo
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
    color: '#000', // Letras blancas
  },
  image: {
    width: 100,  //ancho imagen
    height: 100, //altura imagen
    marginTop: 20,  // Espacio entre texto y imagen
  },
});
