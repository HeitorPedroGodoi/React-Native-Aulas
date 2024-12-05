import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Função para carregar os itens da lista de compras do AsyncStorage
const loadItems = async () => {
  try {
    const savedItems = await AsyncStorage.getItem('@shoppingList');
    return savedItems ? JSON.parse(savedItems) : [];
  } catch (error) {
    console.error('Erro ao carregar os itens:', error);
    return [];
  }
};

const saveItems = async (items) => {
  try {
    await AsyncStorage.setItem('@shoppingList', JSON.stringify(items));
  } catch (error) {
    console.error('Erro ao salvar os itens:', error);
  }
};


function ShoppingListScreen({ navigation }) {
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const loadedItems = await loadItems();
      setItems(loadedItems);
    };
    fetchData();
  }, []);

  
  const removeItem = async (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    await saveItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} ({item.quantity})</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeItem(index)}
            >
              <Text style={styles.deleteButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Adicionar Compra')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tela de Adicionar Compra
function AddItemScreen({ navigation }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const saveItem = async () => {
    if (!name || !quantity) {
      Alert.alert('Erro', 'Por favor, preencha o nome e a quantidade.');
      return;
    }

    const newItem = { name, quantity };
    const currentItems = await loadItems();
    currentItems.push(newItem);
    await saveItems(currentItems);

    Alert.alert('Sucesso', 'Item adicionado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Compra</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Quantidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade"
        value={quantity}
        onChangeText={setQuantity}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.saveButton, styles.button]}
          onPress={saveItem}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cancelButton, styles.button]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Compras" component={ShoppingListScreen} />
        <Stack.Screen name="Adicionar Compra" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007bff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  saveButton: {
    backgroundColor: '#28a745',
  },
  cancelButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

