import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const App = () => {
  const [login, setLogin] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para buscar dados do usuário no GitHub
  const fetchUserData = async () => {
    if (!login) {
      Alert.alert('Erro', 'Por favor, insira um login do GitHub.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();

      if (data.message === 'Not Found') {
        Alert.alert('Erro', 'Usuário não encontrado.');
        setUserData(null);
      } else {
        setUserData(data);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar dados do GitHub.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Dev</Text>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: userData ? userData.avatar_url : 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          }}
          style={styles.profileImage}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o login do GitHub"
          value={login}
          onChangeText={setLogin}
        />
        <TouchableOpacity style={styles.button} onPress={fetchUserData}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : userData ? (
        <View style={styles.userData}>
          <Text style={styles.userInfo}>ID: {userData.id}</Text>
          <Text style={styles.userInfo}>Nome: {userData.name || 'Não informado'}</Text>
          <Text style={styles.userInfo}>Repositórios: {userData.public_repos}</Text>
          <Text style={styles.userInfo}>Criado em: {new Date(userData.created_at).toLocaleDateString()}</Text>
          <Text style={styles.userInfo}>Seguidores: {userData.followers}</Text>
          <Text style={styles.userInfo}>Seguindo: {userData.following}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  userData: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  userInfo: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default App;