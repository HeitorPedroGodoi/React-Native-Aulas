import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Bitcoin from './src/Paginas/Bitcoin';
import Dolar from './src/Paginas/Dolar';
import Euro from './src/Paginas/Euro';

const Tab = createMaterialTopTabNavigator();

export default function App() {
return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Dólar' component={Dolar} />
        <Tab.Screen name='Euro' component={Euro} />
        <Tab.Screen name='Bitcoin' component={Bitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
