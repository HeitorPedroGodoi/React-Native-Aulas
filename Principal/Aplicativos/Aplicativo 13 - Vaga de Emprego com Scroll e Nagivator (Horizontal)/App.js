import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './SRC/Paginas/Home/HomeScreen';
import JobDetails from './SRC/Paginas/Job/JobDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Vagas de TI' }} />
        <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Detalhes da Vaga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}