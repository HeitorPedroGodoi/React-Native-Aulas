import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
let texto = "Multiplicador de Números";

function App(){
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)


  function entrar(){
      setResultado(numero1 * numero2);
  }
    function resetar() {
    setResultado(0)
  }




  return(
    <View style={styles.area}>
    <Text style={{fontSize: 28, color: '#FFD700', textAlign: 'center'}}> {texto} </Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o 1º numero"
    onChangeText={setNumero1}
    />

    <TextInput
    style={styles.input}
    placeholder="Digite o 2º numero"
    onChangeText={setNumero2}
    />



    <Button title="Calcular" onPress={entrar} />
    <Button title="Resetar" color="blue"  onPress={resetar} />
    <Text style={styles.texto}> Resultado: {resultado} </Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})




export default App;
