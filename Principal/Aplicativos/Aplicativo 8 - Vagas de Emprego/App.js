import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';




function App(){
  return(
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={true}>
      
        <View style={styles.box1}>
          <Text style={styles.Titulo}> Desenvolvedor Fullstack </Text>
          <Text style={styles.Text}>Salário: R$ 780,00 </Text>
          <Text style={styles.Text}>Descrição: Tv </Text>
          <Text style={styles.Text}>Contato: 40028922 </Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.Titulo}> Desenvolvedor FrontEnd</Text>
          <Text style={styles.Text}>Salário: R$ 780,00 </Text>
          <Text style={styles.Text}>Descrição: Desenvolver aplicações front-end </Text>
          <Text style={styles.Text}>Contato: 2189789 </Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.Titulo}> Garoto de Programa</Text>
          <Text style={styles.Text}>Salário: a depender do desempenho.</Text>
          <Text style={styles.Text}>Descrição: Fazer programas</Text>
          <Text style={styles.Text}>Contato: 09086678</Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.Titulo}> Professor </Text>
          <Text style={styles.Text}>Salário: Uma coca e um pastel </Text>
          <Text style={styles.Text}>Descrição: Desenvolver atividades para a iluminanção dos alunos</Text>
          <Text style={styles.Text}>Contato: 123512345 </Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.Titulo} > Matador Profissional</Text>
          <Text style={styles.Text}>Salário: a depender do desempenho.</Text>
          <Text style={styles.Text}>Descrição: Matar gente por dinheiro</Text>
          <Text style={styles.Text}>Contato: 86876543 </Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.Titulo}>Aplicador de Golpe Profissional (coach de estilo de vida)</Text>
          <Text style={styles.Text}>Salário: R$ 7800,00 + o salário alheio </Text>
          <Text style={styles.Text}>Descrição: Enganar trabalhadores para a obtenção de luco </Text>
          <Text style={styles.Text2}>Contato: 666-616-15 </Text>
        </View>

      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1:{
    height: 200,
    width: 300,
    borderColor: "black",
    borderWidth: 10,
    borderRadius: 10,
    margin: 2,
  },
  Titulo:{
    color: 'blue',
    fontSize: 25,
  },
  Text:{
    fontSize: 18
  },
  box2:{
    height: 250,
    width: 300,
    borderColor: "black",
    borderWidth: 10,
    borderRadius: 10,
    margin: 2,
  },
  Text2:{
    fontSize: 18,
    color: 'red'
  }
})



export default App;
