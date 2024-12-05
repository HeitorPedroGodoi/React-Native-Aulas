import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Tela Principal: Lista de Tarefas
function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('@tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar as tarefas:', error);
    }
  };

  const removeTask = async (index) => {
    try {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Erro ao remover a tarefa:', error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.taskText}>{task}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeTask(index)}
            >
              <Text style={styles.deleteButtonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Adicionar Tarefa')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tela Secundária: Adicionar Tarefa
function AddTaskScreen({ navigation }) {
  const [taskName, setTaskName] = useState('');

  const saveTask = async () => {
    if (taskName.trim()) {
      try {
        const savedTasks = await AsyncStorage.getItem('@tasks');
        const currentTasks = savedTasks ? JSON.parse(savedTasks) : [];
        const updatedTasks = [...currentTasks, taskName];
        await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
        Alert.alert('Sucesso', 'Tarefa adicionada!');
        navigation.goBack();
      } catch (error) {
        console.error('Erro ao salvar a tarefa:', error);
      }
    } else {
      Alert.alert('Erro', 'Digite um nome para a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Tarefa</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Digite aqui..."
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.saveButton, styles.button]} onPress={saveTask}>
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
        <Stack.Screen name="Tarefas" component={TaskListScreen} />
        <Stack.Screen name="Adicionar Tarefa" component={AddTaskScreen} />
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
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  taskText: {
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
    backgroundColor: 'green',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
    borderRadius: 5,
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
