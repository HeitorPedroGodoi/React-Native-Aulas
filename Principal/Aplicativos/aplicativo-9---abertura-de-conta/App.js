import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [dadosConfirmados, setDadosConfirmados] = useState(false);

  const confirmarDados = () => {
    setDadosConfirmados(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        style={styles.picker}
        onValueChange={(itemValue) => setSexo(itemValue)}>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <Text>Escolaridade:</Text>
      <Picker
        selectedValue={escolaridade}
        style={styles.picker}
        onValueChange={(itemValue) => setEscolaridade(itemValue)}>
        <Picker.Item label="Ensino Fundamental" value="Fundamental" />
        <Picker.Item label="Ensino Médio" value="Medio" />
        <Picker.Item label="Ensino Superior" value="Superior" />
      </Picker>

      <Text>Limite na Conta:</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={(value) => setLimite(value)}
      />
      <Text>R$ {limite.toFixed(2)}</Text>

      <Text>Brasileiro:</Text>
      <Switch value={brasileiro} onValueChange={setBrasileiro} />

      <Button title="Confirmar" onPress={confirmarDados} />

      {dadosConfirmados && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Dados informados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Sexo: {sexo}</Text>
          <Text>Escolaridade: {escolaridade}</Text>
          <Text>Limite: R$ {limite.toFixed(2)}</Text>
          <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
});

export default App;
