import { View, Text, Image } from 'react-native'; 
import Academico from './SRC/componentes/Academico'
import Emprego from './SRC/componentes/Emprego'
import Idade from './SRC/componentes/Idade'
import Imagem from './SRC/componentes/Imagem'
import Nome from './SRC/componentes/Nome'
import Projetos from './SRC/componentes/Projetos'
import Titulo from './SRC/componentes/Titulo'

function App(){ 
  return( 
    <View style={{background: 'linear-gradient(#990000, white)'}}>
    <Titulo/>
    <Imagem/>
    <Nome/>
    <Idade/>
    <Academico/>
    <Emprego/>
    </View> 
    )
}

export default App;
