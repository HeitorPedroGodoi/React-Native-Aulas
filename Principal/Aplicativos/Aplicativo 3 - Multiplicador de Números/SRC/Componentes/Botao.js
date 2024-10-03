import { View, Button } from 'react-native'
import {estilos} from '../estilos'

function Botao(props){
  return(
    <View style={estilos.botao}>
      <Button title={props.titulo} color={props.cor} onPress={props.acao} />
    </View>
  )
}

export default Botao