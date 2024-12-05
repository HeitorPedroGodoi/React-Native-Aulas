import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela 1: Visualizar Frase
function ViewPhraseScreen({ navigation }) {
  const [phrase, setPhrase] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  // Carregar as configurações salvas
  const loadSettings = async () => {
    try {
      const savedPhrase = await AsyncStorage.getItem('@user_phrase');
      const savedDarkMode = await AsyncStorage.getItem('@dark_mode');
      const savedFontSize = await AsyncStorage.getItem('@font_size');

      setPhrase(savedPhrase || 'Nenhuma frase configurada.');
      setIsDarkMode(savedDarkMode === 'true');
      setFontSize(savedFontSize ? parseInt(savedFontSize, 10) : 18);
    } catch (error) {
      console.error('Erro ao carregar as configurações:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadSettings);
    return unsubscribe;
  }, [navigation]);

  // Alternar modo escuro/claro
  const toggleDarkMode = async () => {
    try {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      await AsyncStorage.setItem('@dark_mode', newMode.toString());
    } catch (error) {
      console.error('Erro ao alterar o modo:', error);
    }
  };

  // Alterar tamanho da fonte
  const adjustFontSize = async (increase) => {
    try {
      const newFontSize = increase ? fontSize + 2 : fontSize - 2;
      if (newFontSize >= 12 && newFontSize <= 40) {
        setFontSize(newFontSize);
        await AsyncStorage.setItem('@font_size', newFontSize.toString());
      }
    } catch (error) {
      console.error('Erro ao alterar o tamanho da fonte:', error);
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.topBar}>
        <View style={styles.topLeft}>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.topRight}>
          <TouchableOpacity style={styles.smallButton} onPress={() => adjustFontSize(true)}>
            <Text style={styles.smallButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => adjustFontSize(false)}>
            <Text style={styles.smallButtonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.phraseText, { fontSize }]}>{phrase}</Text>
      <Button title="Configurar Frase" onPress={() => navigation.navigate('Configurar Frase')} />
    </View>
  );
}

// Tela 2: Configurar Frase
function ConfigurePhraseScreen({ navigation }) {
  const [newPhrase, setNewPhrase] = useState('');

  const savePhrase = async () => {
    if (newPhrase.trim()) {
      try {
        await AsyncStorage.setItem('@user_phrase', newPhrase);
        alert('Frase salva com sucesso!');
        navigation.goBack();
      } catch (error) {
        console.error('Erro ao salvar a frase:', error);
      }
    } else {
      alert('Digite uma frase antes de salvar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite sua nova frase:</Text>
      <TextInput
        style={styles.input}
        value={newPhrase}
        onChangeText={setNewPhrase}
        placeholder="Exemplo: O céu é o limite!"
      />
      <Button title="Salvar Frase" onPress={savePhrase} />
    </View>
  );
}

// Navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Visualizar Frase">
        <Stack.Screen name="Visualizar Frase" component={ViewPhraseScreen} />
        <Stack.Screen name="Configurar Frase" component={ConfigurePhraseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  topBar: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallButton: {
    marginHorizontal: 5,
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  phraseText: {
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginTop: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});