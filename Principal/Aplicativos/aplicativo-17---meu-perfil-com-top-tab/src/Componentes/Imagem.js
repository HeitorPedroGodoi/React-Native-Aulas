import { View,Image } from 'react-native'
import {estilos} from './estilos'

function Imagem(){
  return(
    <View style={estilos.ViewImagem}>
       <Image source={require('../../Midia/MeuPerfil.jfif')} style={estilos.Imagem} />
    </View>
  )
}

export default Imagem