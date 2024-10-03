import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Botao from '../Componentes/Botao'
import Imagem from '../Componentes/Imagem'
import {estilos} from '../Estilos'
let texto = "Álcool ou Gasolina?";

function Posto(){
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
    function resetar() {
    setResultado(0)
  }


  return(
    <View style={estilos.area}>
    <Text style={{fontSize: 28, textAlign: 'center'}}> {texto} </Text>
    <Imagem/>
    <TextInput
    style={estilos.input}
    placeholder="Preço do Litro do Álcool"
    onChangeText={setNumero1}
    />

    <TextInput
    style={estilos.input}
    placeholder="Preço do Litro da Gasolina"
    onChangeText={setNumero2}
    />

    <TextInput
    style={estilos.input}
    placeholder={resultado} 
    />
    <Text> *Use ponto invés de vírgula </Text>
    <Botao titulo='Calcular' cor='steelblue' acao={entrar}/>
    <Botao titulo="Resetar" cor="red"  acao={resetar} />
    </View>
  );
}

export default Posto;