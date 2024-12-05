import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Pessoal from './src/pages/pessoal';
import Academia from './src/pages/Academico';
import Experiencia from './src/pages/experiencia';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Academico" component={Academia} options={{title: 'Formação'}}/>
        <Tab.Screen name="Experiencia" component={Experiencia} options={{ title:'Experiência' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
