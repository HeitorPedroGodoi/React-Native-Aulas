import { View,Text } from 'react-native'
import {estilos} from '../estilos'

function Idade(){
  return(
    <View style={estilos.Nome}>
       <Text style={{fontSize: 25, fontWeight: 'bold'}}> Minha Idade?</Text>
       <Text style={{fontSize: 20}}> 21</Text>
    </View>
  )
}

export default Idade