import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Função para buscar filmes aleatórios
const fetchMovies = async () => {
  try {
    const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar os filmes:", error);
    return [];
  }
};

// Tela Inicial: Aplicativo de Filmes
function MovieListScreen({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };
    loadMovies();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aplicativo de Filmes</Text>
      {movies.slice(0, 3).map((movie, index) => (
        <View key={index} style={styles.movieContainer}>
          <View style={styles.movieHeader}>
            <Text style={styles.movieTitle}>{movie.nome}</Text>
            <TouchableOpacity
              style={styles.saibaMaisButton}
              onPress={() => navigation.navigate('Saiba Mais', { movieId: movie.id })}
            >
              <Text style={styles.saibaMaisText}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
          <Image source={{ uri: movie.foto }} style={styles.movieImage} />
        </View>
      ))}
    </ScrollView>
  );
}

// Tela de Detalhes: Saiba Mais
function MovieDetailsScreen({ route }) {
  const [movie, setMovie] = useState(null);
  const { movieId } = route.params;

  useEffect(() => {
    const loadMovieDetails = async () => {
      const response = await fetch(`https://sujeitoprogramador.com/r-api/?api=filmes`);
      const data = await response.json();
      const selectedMovie = data.find((movie) => movie.id === movieId);
      setMovie(selectedMovie);
    };
    loadMovieDetails();
  }, [movieId]);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.movieDetailsTitle}>{movie.nome} - Sinopse</Text>
      <Text style={styles.movieSynopsis}>{movie.sinopse}</Text>
    </View>
  );
}

// Navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aplicativo de Filmes" component={MovieListScreen} />
        <Stack.Screen name="Saiba Mais" component={MovieDetailsScreen} />
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
  movieContainer: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  movieHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  saibaMaisButton: {
    marginLeft: 10,
  },
  saibaMaisText: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 15,
  },
  movieDetailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  movieSynopsis: {
    fontSize: 16,
    color: '#333',
  },
});