import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Botao from '../Componentes/Botao'
import Imagem from '../Componentes/Imagem'
import {estilos} from '../Estilos'
let texto = "Cálculo de IMC";

function IMC(){
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState('')


  function entrar(){
    var peso;
    peso = numero2/(numero1 * numero1);

      if( peso <= 18.5) {
        setResultado("Abaixo do peso: " + peso.toFixed(2))
      }
      else if ( peso <= 24.9 ){
        setResultado("peso normal: " + peso.toFixed(2) )
      }
      else if ( peso <= 29.9 ){
        setResultado("sobrepso: " + peso.toFixed(2))
      }
      else if (  peso <= 34.9 ){
        setResultado("Obesidade Grau 1: " + peso.toFixed(2))
      }
      else if (  peso <= 39.9 ){
        setResultado("Obesidade Grau 2: " + peso.toFixed(2))
      }
      else {
        setResultado("Obesidade Grau 3: " + peso.toFixed(2))
      }
  }
  function resetar() {
    setResultado(0)
  }




  return(
    <View>
    <Text style={estilos.Texto}> {texto} </Text>
    <Imagem/>
    <TextInput
    style={estilos.input}
    placeholder="Insira sua altura (Ex: 1.76)"
    onChangeText={setNumero1}
    />

    <TextInput
    style={estilos.input}
    placeholder="Insira seu peso"
    onChangeText={setNumero2}
    />
  
    <TextInput
    style={estilos.input}
    placeholder={resultado} 
    />



    <Botao titulo='Calcular' cor='steelblue' acao={entrar} />
    <Botao titulo="Resetar" cor="red"  acao={resetar} />
    </View>
  );
}
export default IMC;