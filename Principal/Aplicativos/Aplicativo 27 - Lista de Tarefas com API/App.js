import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationHelpersContext } from '@react-navigation/core';

// URL da API
const API_URL = 'https://tarefa-backend.onrender.com/tasks';

// Função para buscar todas as tarefas
const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar as tarefas:", error);
    return [];
  }
};

// Função para criar uma nova tarefa
const createTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar a tarefa:", error);
  }
};

// Função para editar uma tarefa existente
const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
  }
};

// Função para excluir uma tarefa
const deleteTask = async (taskId) => {
  try {
    await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error("Erro ao excluir a tarefa:", error);
  }
};

// Página de listagem de Tarefas
function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);
    };
    loadTasks();
  }, []);

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    navigation.navigate('Criar/Alterar Tarefa', { task });
  };

 return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Criar/Alterar Tarefa')}
      >
        <Text style={styles.addButtonText}>Incluir</Text>
      </TouchableOpacity>

      {tasks.map((task) => (
        <View key={task.id} style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
          <View style={styles.taskActions}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleEdit(task)}
            >
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(task.id)}
            >
              <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Página de criação ou alteração de Tarefa
function TaskFormScreen({ route, navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskId, setTaskId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.task) {
      const { task } = route.params;
      setTitle(task.title);
      setDescription(task.description);
      setTaskId(task.id);
    }
  }, [route.params]);

  const handleSave = async () => {
    if (!title || !description) {
      alert('Por favor, preencha o título e a descrição');
      return;
    }

    const task = { title, description };

    try {
      setLoading(true);

      if (taskId) {
        // Atualizar tarefa existente
        const updatedTask = await updateTask(taskId, task);
        alert('Tarefa atualizada com sucesso!');
      } else {
        // Criar nova tarefa
        const newTask = await createTask(task);
        alert('Tarefa criada com sucesso!');
      }

      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar tarefa:", error);
      alert('Erro ao salvar tarefa. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{taskId ? 'Alterar Tarefa' : 'Criar Tarefa'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={handleSave} color="green" disabled={loading} />
        <Button title="Cancelar" onPress={handleCancel} color="blue" />
      </View>
      {loading && <Text>Carregando...</Text>}
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
        <Stack.Screen name="Criar/Alterar Tarefa" component={TaskFormScreen} />
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
  addButton: {
    backgroundColor: '#28a745',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  taskContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  taskActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#ffc107',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
