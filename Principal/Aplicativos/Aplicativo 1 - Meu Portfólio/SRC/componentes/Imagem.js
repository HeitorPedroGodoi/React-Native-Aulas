import { View,Image } from 'react-native'
import {estilos} from '../estilos'

function Imagem(){
  return(
    <View style={estilos.imagem}>
       <Image source={require('../../Midia/MeuPerfil.jfif')} style={{width: 200, height: 100}} />
    </View>
  )
}

export default Imagem