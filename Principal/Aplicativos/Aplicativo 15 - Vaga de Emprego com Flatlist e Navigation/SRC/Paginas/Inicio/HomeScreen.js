import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const jobList = [
  { id: '1', title: 'Desenvolvedor Frontend', description: 'Trabalhar com React, CSS e JavaScript', location: 'Remoto', salario: 'R$6000,00' },
  { id: '2', title: 'Engenheiro de Software', description: 'Trabalhar com Java, Spring Boot e Docker', location: 'São Paulo', salario: 'R$3500,00' },
  { id: '3', title: 'Analista de Dados', description: 'Trabalhar com Python, SQL e Power BI', location: 'Rio de Janeiro', salario: 'R$5000,00'},
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('JobDetails', { job: item })}
      >
        <Text style={styles.buttonText}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={jobList}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  jobCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});