import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const jobList = [
  { id: '1', title: 'Desenvolvedor Frontend', description: 'React, JavaScript, CSS', location: 'Remoto' },
  { id: '2', title: 'Engenheiro de Software', description: 'Java, Spring, Docker', location: 'São Paulo' },
  { id: '3', title: 'Analista de Dados', description: 'Python, SQL, Power BI', location: 'Rio de Janeiro' },
];

export default function Inicio({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobList.map((job) => (
        <View key={job.id} style={styles.jobCard}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('JobDetails', { job })}
          >
            <Text style={styles.buttonText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
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