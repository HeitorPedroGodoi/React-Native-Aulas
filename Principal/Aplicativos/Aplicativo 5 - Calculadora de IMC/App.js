import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
let texto = "Cálculo de IMC";
let img = 'https://dhg1h5j42swfq.cloudfront.net/2020/07/09003426/IMC.png';

function App(){
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState('')


  function entrar(){
    var peso;
    peso = numero2/(numero1 * numero1);

      if( peso <= 18.5) {
        setResultado("Abaixo do peso " + peso.toFixed(2))
      }
      else if ( peso <= 24.9 ){
        setResultado("peso normal " + peso.toFixed(2) )
      }
      else if ( peso <= 29.9 ){
        setResultado("sobrepso " + peso.toFixed(2))
      }
      else if (  peso <= 34.9 ){
        setResultado("Obesidade Grau 1 " + peso.toFixed(2))
      }
      else if (  peso <= 39.9 ){
        setResultado("Obesidade Grau 2 " + peso.toFixed(2))
      }
      else {
        setResultado("Obesidade Grau 3 " + peso.toFixed(2))
      }
  }




  return(
    <View style={styles.area}>
    <Text style={{fontSize: 28, textAlign: 'center'}}> {texto} </Text>
    <Image source={{ uri: img }} style={{ width: 150, height: 150, alignSelf: 'center'}} /> 
    <TextInput
    style={styles.input}
    placeholder="Insira sua altura (Ex: 1.76)"
    onChangeText={setNumero1}
    />

    <TextInput
    style={styles.input}
    placeholder="Insira seu peso"
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