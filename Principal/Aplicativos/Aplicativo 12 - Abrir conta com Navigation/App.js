import React, { useState } from 'react';
import { Text, TextInput, View, Button, Picker, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela 1: Formulário de Cadastro
function FormScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(10);
  const [nacionalidade, setNacionalidade] = useState(false); // Brasileiro (true ou false)

  const handleSubmit = () => {
    navigation.navigate('Detalhes', {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      nacionalidade
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} placeholder="Digite seu nome" style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      
      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} placeholder="Digite sua idade" keyboardType="numeric" style={{ borderBottomWidth: 1, marginBottom: 10 }} />

      <Text>Sexo:</Text>
      <Picker selectedValue={sexo} onValueChange={setSexo} style={{ height: 50, width: 200 }}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <Text>Escolaridade:</Text>
      <Picker selectedValue={escolaridade} onValueChange={setEscolaridade} style={{ height: 50, width: 200 }}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Ensino Fundamental" value="fundamental" />
        <Picker.Item label="Ensino Médio" value="medio" />
        <Picker.Item label="Ensino Superior" value="superior" />
      </Picker>

      <Text>Limite de Crédito:</Text>
      <TextInput value={String(limite)} onChangeText={text => setLimite(Number(text))} placeholder="Limite de 10 a 1000" keyboardType="numeric" style={{ borderBottomWidth: 1, marginBottom: 10 }} />

      <Text>Brasileiro?</Text>
      <Switch value={nacionalidade} onValueChange={setNacionalidade} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

// Tela 2: Exibe os dados inseridos
function DetailsScreen({ route }) {
  const { nome, idade, sexo, escolaridade, limite, nacionalidade } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escolaridade}</Text>
      <Text>Limite de Crédito: {limite}</Text>
      <Text>Brasileiro: {nacionalidade ? 'Sim' : 'Não'}</Text>
    </View>
  );
}

// Navegação entre telas
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}