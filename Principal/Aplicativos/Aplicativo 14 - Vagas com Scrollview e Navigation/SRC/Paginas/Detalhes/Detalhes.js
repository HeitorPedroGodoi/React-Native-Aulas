import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>Descrição:</Text>
      <Text style={styles.text}>{job.description}</Text>
      <Text style={styles.subtitle}>Localização:</Text>
      <Text style={styles.text}>{job.location}</Text>
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