import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const App = () => {
  const [caravana, setCaravana] = useState('');
  const [fechaParicion, setFechaParicion] = useState('');
  const [tipoAnimal, setTipoAnimal] = useState('');

  const handleSubmit = () => {
    console.log({ caravana, fechaParicion, tipoAnimal });
    // Aquí agregarías el código para enviar los datos al servidor
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Número de Caravana"
        value={caravana}
        onChangeText={setCaravana}
      />
      <TextInput
        label="Fecha de Parición"
        value={fechaParicion}
        onChangeText={setFechaParicion}
      />
      <TextInput
        label="Tipo de Animal"
        value={tipoAnimal}
        onChangeText={setTipoAnimal}
      />
      <Button onPress={handleSubmit}>Enviar Datos</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default App;