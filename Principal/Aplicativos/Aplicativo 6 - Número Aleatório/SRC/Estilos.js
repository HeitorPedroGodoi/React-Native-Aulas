import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    fontFamily: 'monospace',
  },
  Texto:{
    marginTop: 20,
    fontSize: 28, 
    color: '#2e3e59', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
    botao:{
    marginTop: 20,
    marginStart: 15,
    marginEnd: 15,
  },
  Imagem:{
    width: 300, 
    height: 150, 
    alignSelf: 'center'
  },
    Texto2:{
    marginTop: 20,
    fontSize: 42, 
    color: 'green', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
})


export {estilos}