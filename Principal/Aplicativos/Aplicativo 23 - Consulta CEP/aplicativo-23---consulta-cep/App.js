import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Função para buscar o endereço com base no CEP
const fetchAddress = async (cep, setAddress, setLoading) => {
  if (cep.length !== 8) {
    Alert.alert('Erro', 'O CEP deve ter 8 caracteres.');
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      Alert.alert('Erro', 'CEP não encontrado.');
    } else {
      setAddress(data);
    }
  } catch (error) {
    Alert.alert('Erro', 'Falha ao buscar informações do CEP.');
  } finally {
    setLoading(false);
  }
};

export default function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CEP X Endereço</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchAddress(cep, setAddress, setLoading)}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : address ? (
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>CEP: {address.cep}</Text>
          <Text style={styles.addressText}>Logradouro: {address.logradouro}</Text>
          <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
          <Text style={styles.addressText}>Cidade: {address.localidade}</Text>
          <Text style={styles.addressText}>Estado: {address.uf}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loading: {
    fontSize: 18,
    color: '#888',
  },
  addressContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  addressText: {
    fontSize: 16,
    marginVertical: 5,
  },
});
