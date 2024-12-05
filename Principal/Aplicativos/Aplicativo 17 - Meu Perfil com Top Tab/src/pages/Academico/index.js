import React from 'react';
import { View, Text } from 'react-native';
import {estilos} from './estilos';


export default function Academia() {
 return (
    <View style={estilos.Nome}>
       <Text style={{fontSize: 25, fontWeight: 'bold'}}> Formação Acadêmica</Text>
       <Text style={{fontSize: 20}}> Fatec Praia Grande e ETEC</Text>
    </View>
  );
}


