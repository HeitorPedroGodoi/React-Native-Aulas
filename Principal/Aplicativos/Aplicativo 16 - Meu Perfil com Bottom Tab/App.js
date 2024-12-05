import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Pessoal from './src/Paginas/Pessoal';
import Experiencia from './src/Paginas/Trabajo';
import Academia from './src/Paginas/Academico';


const Tab = createBottomTabNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
        <Tab.Screen name='Academia' component={Academia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
