import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ConversorMoedas = () => {
  const [valor, setValor] = useState('');
  const [deMoeda, setDeMoeda] = useState('USD');
  const [paraMoeda, setParaMoeda] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const handleConverter = () => {
    // Implementação fictícia de conversão - ajuste para usar uma API real se necessário
    const taxa = deMoeda === 'USD' && paraMoeda === 'BRL' ? 5.25 : 1; // Exemplo de taxa
    setResultado((parseFloat(valor) * taxa).toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas Dólar, Real e Euro</Text>

      <Text style={styles.label}>Valor:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o valor"
        placeholderTextColor="#aaa"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.label}>De:</Text>
      <Picker
        selectedValue={deMoeda}
        style={styles.picker}
        onValueChange={(itemValue) => setDeMoeda(itemValue)}
      >
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Real (BRL)" value="BRL" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
      </Picker>

      <Text style={styles.label}>Para:</Text>
      <Picker
        selectedValue={paraMoeda}
        style={styles.picker}
        onValueChange={(itemValue) => setParaMoeda(itemValue)}
      >
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Real (BRL)" value="BRL" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
      </Picker>

      <Button title="Converter" onPress={handleConverter} color="#4CAF50" />

      <Text style={styles.resultLabel}>Resultado</Text>
      <Text style={styles.result}>{resultado ? `${paraMoeda} ${resultado}` : '---'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#FF6347',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    color: '#FFF',
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  resultLabel: {
    color: '#32CD32',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  result: {
    color: '#32CD32',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ConversorMoedas;
