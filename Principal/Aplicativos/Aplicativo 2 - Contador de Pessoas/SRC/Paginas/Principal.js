import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import Botao from '../Componentes/botao'
import {estilos} from '../Estilos'

 function Contador(){
  let texto = "Contador de pessoas";
  const [numero, setNumero] = useState(0)


  function aumentar() {
    setNumero(numero + 1)
  }

  function diminuir() {
    if(numero > 0 )
    setNumero(numero - 1)
  }

  function resetar() {
    setNumero(0)
  }


  return(
    <View style={estilos.View}>
       <Text style={estilos.Texto}> {texto} </Text>

      <Text style={estilos.Texto}>{numero}</Text>

      <Botao titulo='+' cor='#90ee90' acao={aumentar}/>
      <Botao titulo='-' cor='red' acao={diminuir}/>
      <Botao titulo='Zerar' cor='#C0C0C0' acao={resetar}/>
    </View>
  )
}

export default Contador