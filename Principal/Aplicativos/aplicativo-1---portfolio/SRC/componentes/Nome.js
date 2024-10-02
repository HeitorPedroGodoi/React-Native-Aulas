import { View,Text } from 'react-native'
import {estilos} from '../estilos'

function Nome(){
  return(
    <View style={estilos.Nome}>
       <Text style={{fontSize: 25, fontWeight: 'bold'}}> Quem sou?</Text>
       <Text style={{fontSize: 20}}> Heitor Pedro de Godoi</Text>
    </View>
  )
}

export default Nome