import { View,Text } from 'react-native'
import {estilos} from '../estilos'

function Academico(){
  return(
    <View style={estilos.Nome}>
       <Text style={{fontSize: 25, fontWeight: 'bold'}}> Formação Acadêmica</Text>
       <Text style={{fontSize: 20}}> Fatec Praia Grande e ETEC</Text>
    </View>
  )
}

export default Academico