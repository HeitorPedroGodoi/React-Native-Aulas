import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Produtos from './src/Vagas';

function App(){
  return(
    <View style={styles.container}>
      <ScrollView>
        <Text style={{color: '#173075', fontSize: 25, margin: 15, textAlign: 'center'}}>V A G A S</Text>
        <Produtos />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;