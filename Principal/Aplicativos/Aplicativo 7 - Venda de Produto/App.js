import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
    
let img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UC1WGanQcka6j1HdEupi3wmcaJXUAytKOw&s';
let img2 = 'https://photos.enjoei.com.br/disco-de-duelo-yu-gi-oh/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMDYzNTk0My9iNjcwOTE2ODFjOTZiMTRiODlhNWNkMjdiYzFlMmVkYy5qcGc';
let img3 = 'https://m.media-amazon.com/images/I/418JUwjClYL._AC_SY1000_.jpg';
let img4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfkLAiwOISLWdUICOtfuunjKylpj0pvOtzA&s';
let img5 = 'https://ae01.alicdn.com/kf/Hcddd553278e14340ac4b6c5ddcbd23b8c/Hongshan-cultura-archaize-preto-ferro-meteorito-machado-pequena-est-tua.jpg';
let img6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaXhJJ6hI5L28t3ExnyH4vLhJXippzb5prw&s';

function App(){
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.box1}>
          <Image
            source={{ uri: img }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Mega TV de tela plana</Text>
          <Text>Preço: 12 mil reais</Text>
          <Text>Descrição: Tv </Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={{ uri: img2 }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Disco de Duelo</Text>
          <Text>Preço: 8 mil reais</Text>
          <Text>Descrição: Disco de duelo de Yu Gi Oh </Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={{ uri: img3 }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Máscara de Oni</Text>
          <Text>Preço: 3 mil reais</Text>
          <Text>Descrição: Máscara de demônio-ogro estilo japonês</Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={{ uri: img4 }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Roupão de banho de luxo</Text>
          <Text>Preço: 2,5 mil reais</Text>
          <Text>Descrição: Roupão ideal para relaxar após o banho </Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={{ uri: img5 }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Machado de Ferro Meteórico</Text>
          <Text>Preço: 8 mil reais</Text>
          <Text>Descrição: Machado feito a partir de ferro de um meteoro </Text>
        </View>

        <View style={styles.box1}>
          <Image
            source={{ uri: img6 }}
            style={{ width: 150, height: 150}}
          />
          <Text>Nome: Escudo de vime</Text>
          <Text>Preço: 780 reais</Text>
          <Text>Descrição: Escudo feito de vime </Text>
        </View>


      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    height: 300,
    width: 190,
    borderColor: "black",
    borderWidth: 10,
    borderRadius: 10,
    margin: 2,
  }
})




export default App;
