import React, { Component, useState } from 'react';
import { View, Text,TextInput, Button } from 'react-native';
import {estilos} from './estilos';
import Botao from '../../Componentes/botao'
let texto = "Conversor de Moeda";


export default function Bitcoin() {
  const [numero, setNumero] = useState(0)
  const [resultado, setResultado] = useState('')


  function entrar(){
    setResultado(numero + " reais valem " + numero / 6.04 + " dolár(es)");
  }

 return (
    <View style={estilos.Nome}>
       <Text style={estilos.p2}> {texto} </Text>
    <TextInput
    style={estilos.input}
    placeholder="Insira o valor em real"
    onChangeText={setNumero}
    />

  <Botao titulo='Converter' cor='steelblue' acao={entrar} /> 
    <Text style={estilos.p2}>{resultado}  </Text>
    
    </View>
  );
}