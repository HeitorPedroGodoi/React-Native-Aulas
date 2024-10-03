import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
let texto = "Álcool ou Gasolina?";
let img = 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg';

function App(){
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState('')


  function entrar(){
      if (numero1 / numero2 <= 0.7){
        setResultado('É melhor etanol')
      }
      else {
        setResultado('É melhor gasolina')
      }
  }




  return(
    <View style={styles.area}>
    <Text style={{fontSize: 28, textAlign: 'center'}}> {texto} </Text>
    <Image source={{ uri: img }} style={{ width: 150, height: 150, alignSelf: 'center'}} /> 
    <TextInput
    style={styles.input}
    placeholder="Preço do Litro do Álcool"
    onChangeText={setNumero1}
    />

    <TextInput
    style={styles.input}
    placeholder="Preço do Litro da Gasolina"
    onChangeText={setNumero2}
    />



    <Button  title="Calcular" onPress={entrar} />
    
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
