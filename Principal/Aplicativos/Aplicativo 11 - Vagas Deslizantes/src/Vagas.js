import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Desenvolvedor Backend',
    salary: 'Salário R$ 3500,00',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2024/01/meta_tecno-1024x544.jpeg',
    description: 'Empresa: Na Meta, estamos construindo novas maneiras inovadoras de ajudar as pessoas a se sentirem mais próximas. A composição da nossa empresa reflete as diversas perspectivas das pessoas que usam nossas tecnologias.',
    contact: 'Contato: @Meta',
  },
  {
    id: '2',
    name: 'Engenheiro de dados',
    salary: 'Salário R$ 5000,00',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2024/01/amazon_tecno-1024x576.jpeg',
    description: 'Empresa: A Amazon se orienta por 4 pilares: obsessão pelo cliente, paixão por invenções, compromisso com excelência operacional e visão de longo prazo. Nos empenhamos todos os dias para sermos a empresa mais centrada no cliente do mundo, a melhor empregadora e o lugar mais seguro para se trabalhar no mundo.',
    contact: 'Contato: amazon.com',
  },
  {
    id: '3',
    name: 'Desenvolvedor Frontend',
    salary: 'Salário R$ 2200,00',
    image: 'https://portalcbncampinas.com.br/wp-content/uploads/2022/10/portalcbncampinas.com.br-empresas-de-tecnologia-se-reestruturam-e-promovem-demissoes-em-massa-istock-1310441327-min.jpg',
    description: 'Empresa: Nossa missão é capacitar todas as pessoas e organizações do planeta a conquistar mais. Saiba mais sobre nossa empresa, quem somos e o que valorizamos.',
    contact: 'Contato: microsoft@outlook.com',
  },
];

const Produtos = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {products.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.content}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.salary}>{item.salary}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.contact}>{item.contact}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  name: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#696969',
    marginTop: 5,
  },
  contact: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    flex: 1,
  },
});

export default Produtos;
