import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobDetails({ route }) {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>Descrição:</Text>
      <Text style={styles.text}>{job.description}</Text>
      <Text style={styles.subtitle}>Tipo de Trabalho:</Text>
      <Text style={styles.text}>{job.location}</Text>
      <Text style={styles.subtitle}>Empresa:</Text>
      <Text style={styles.text}>{job.company}</Text>
      <Text style={styles.subtitle}>Salário:</Text>
      <Text style={styles.text}>{job.salary}</Text>
      <Text style={styles.subtitle}>Nível da Vaga:</Text>
      <Text style={styles.text}>{job.experienceLevel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});