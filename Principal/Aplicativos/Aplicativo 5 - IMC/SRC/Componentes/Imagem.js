import { View,Image } from 'react-native'
import {estilos} from '../Estilos'

function Imagem(){
  return(
    <View>
       <Image style={estilos.Imagem} source={require('../../Midia/IMC.png')}/>
    </View>
  )
}

export default Imagem