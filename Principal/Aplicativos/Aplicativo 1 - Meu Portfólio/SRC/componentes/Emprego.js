import { View,Text } from 'react-native'
import {estilos} from '../estilos'

function Emprego(){
  return(
    <View style={estilos.Nome}>
       <Text style={{fontSize: 25, fontWeight: 'bold'}}> Experiência Profissional</Text>
       <Text style={{fontSize: 20}}> IBM Brasil</Text>
    </View>
  )
}

export default Emprego