import { View,Text } from 'react-native'
import {estilos} from '../estilos'

function Titulo(){
  return(
    <View style={estilos.titulo}>
    <Text style={{fontSize: 30}}> Porfólio</Text>
    </View>
  )
}

export default Titulo