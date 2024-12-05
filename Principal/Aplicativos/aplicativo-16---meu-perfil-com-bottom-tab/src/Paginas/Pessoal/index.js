import React from 'react';
import { View, Text } from 'react-native';
import {estilos} from './estilos';
import Imagem from '../../Componentes/Imagem';

export default function Pessoal() {
 return (
    <View style={estilos.Nome}>
    <Imagem/>
       <Text style={estilos.Titular}> Quem sou?</Text>
       <Text style={estilos.Texto}> Heitor Pedro de Godoi</Text>
       <Text style={estilos.Titular}> Minha Idade?</Text>
       <Text style={estilos.Texto}> 21</Text>
       <Text style={estilos.Titular}> Aniversário</Text>
       <Text style={estilos.Texto}> 7 de Dezembro</Text>
    </View>
  );
}
