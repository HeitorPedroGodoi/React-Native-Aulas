import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
let texto = "Número Aleatório";
let img = 'https://tm.ibxk.com.br/2022/03/31/31133509263258.jpg';

function App(){
  const [resultado, setResultado] = useState(0)


  function entrar(){
    setResultado(Math.floor(Math.random() * 11))
  }




  return(
    <View style={styles.area}>
    <Text style={{fontSize: 28, textAlign: 'center'}}> {texto} </Text>
    <Image source={{ uri: img }} style={{ width: 250, height: 200, alignSelf: 'center'}} /> 
    <Text style={{fontSize: 28, textAlign: 'center'}}> Pense em um número de 0 a 10 </Text>




    <Button  title="Descobrir" onPress={entrar} />
    
    <Text style={styles.texto}>{resultado} </Text>
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
    fontSize: 45,
    color: 'red',
  }
})




export default App;