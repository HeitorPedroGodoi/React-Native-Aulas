import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const jobList = [
  {
    id: '1',
    title: 'Desenvolvedor Frontend',
    description: 'Trabalhar com React, CSS e JavaScript para desenvolver interfaces web interativas e responsivas.',
    location: 'Remoto',
    company: 'Tech Solutions',
    salary: 'R$ 6.000,00 - R$ 8.000,00',
    experienceLevel: 'Pleno',
  },
  {
    id: '2',
    title: 'Engenheiro de Software',
    description: 'Desenvolver e manter sistemas robustos e escaláveis usando Java, Spring Boot e Docker.',
    location: 'São Paulo',
    company: 'Inovação SA',
    salary: 'R$ 10.000,00 - R$ 12.000,00',
    experienceLevel: 'Sênior',
  },
  {
    id: '3',
    title: 'Analista de Dados',
    description: 'Realizar análise de dados e criar relatórios estratégicos utilizando ferramentas de BI.',
    location: 'Rio de Janeiro',
    company: 'Data Insights Ltda',
    salary: 'R$ 5.000,00 - R$ 7.000,00',
    experienceLevel: 'Pleno',
  },
  {
    id: '4',
    title: 'Especialista em Segurança da Informação',
    description: 'Implementar e monitorar estratégias de segurança cibernética para proteger dados e sistemas.',
    location: 'Remoto',
    company: 'CyberSecure Corp',
    salary: 'R$ 12.000,00 - R$ 15.000,00',
    experienceLevel: 'Sênior',
  },
  {
    id: '5',
    title: 'Designer de UX/UI',
    description: 'Criar interfaces amigáveis e intuitivas para melhorar a experiência do usuário.',
    location: 'Remoto',
    company: 'Creative Minds Studio',
    salary: 'R$ 4.500,00 - R$ 6.500,00',
    experienceLevel: 'Pleno',
  },
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
      horizontal // Isso faz a lista ser exibida horizontalmente
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  jobCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginRight: 15, 
    borderRadius: 5,
    width: 200,
    height: 150,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

