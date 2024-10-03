
import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


export default function App(){
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
    <View style={{ marginTop: 20 }}>
       <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}> {texto} </Text>

      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>{numero}</Text>

      <Button title="+" color="green" onPress={aumentar} />
      <Button title="-" color="red"  onPress={diminuir} />
      <Button title="Resetar" color="blue"  onPress={resetar} />
    </View>
  )
}
