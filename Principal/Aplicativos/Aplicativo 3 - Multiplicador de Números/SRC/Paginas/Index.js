import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Botao from '../Componentes/Botao'
import {estilos} from '../estilos'
let texto = "Multiplicador de Números";

function Multiplica(){
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState('')


  function entrar(){
      setResultado(numero1 * numero2);
  }
    function resetar() {
    setResultado(0)
  }




  return(
    <View style={estilos.area}>
    <Text style={estilos.Texto}> {texto} </Text>
    <TextInput
    style={estilos.input}
    placeholder="Digite o 1º numero"
    onChangeText={setNumero1}
    />

    <TextInput
    style={estilos.input}
    placeholder="Digite o 2º numero"
    onChangeText={setNumero2}
    />
    
    <TextInput
    style={estilos.input}
    placeholder={resultado} 

    />



    <Botao titulo='Calcular' cor='#C0C0C0' acao={entrar}/>
    <Botao titulo="Resetar" cor="red"  acao={resetar} />
    </View>
  );
}

export default Multiplica;