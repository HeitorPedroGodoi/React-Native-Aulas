import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Botao from '../Componentes/Botao'
import Imagem from '../Componentes/Imagem'
import {estilos} from '../Estilos'
let texto = "Número Aleatório";

function Charada(){
  const [resultado, setResultado] = useState('')


  function entrar(){
    setResultado(Math.floor(Math.random() * 11))
  }




  return(
    <View>
    <Text style={estilos.Texto}> {texto} </Text>
    <Imagem/>
    <Text style={estilos.Texto}> Pense em um número de 0 a 10 </Text>




    <Botao titulo='Calcular' cor='green' acao={entrar} />
    
    <Text style={estilos.Texto2}>{resultado} </Text>
    </View>
  );
}

export default Charada;