import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Text from '@components/Text';
import getNowPlayingMovies from '@api/getNowPlayingMovies';
import MovieListItem from './components/MovieListItem';
import { Movie } from '@custom_types/api/tmdb';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigators/index';
import Screen from '@components/Screen';


const WatchScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  const fetchMovies = async (page: number, isLoadingMore = false) => {
    try {
      if (!isLoadingMore) {
        setIsLoading(true);
      }
      const data = await getNowPlayingMovies(page);
      console.log('data', data);
      if (isLoadingMore) {
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } else {
        setMovies(data.results);
      }
      setHasMorePages(data.page < data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!isLoadingMore && hasMorePages && !isLoading) {
      setIsLoadingMore(true);
      setCurrentPage(prev => prev + 1);
      fetchMovies(currentPage + 1, true);
    }
  }, [isLoadingMore, hasMorePages, currentPage, isLoading]);


  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  };

  const renderItem = ({ item }: { item: Movie }) => {
    const handleMoviePress = () => {
        console.log('movie pressed:', item.title);
        navigation.navigate('MovieDetails', { title: item.title, posterUrl: item.poster_path, description: item.overview });
    };

    return (
    <MovieListItem
      key={item.id}
      title={item.title}
      posterUrl={item.backdrop_path}
      onPress={handleMoviePress}
    />
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Screen showNavbar title="Watch" showBackButton={false} centerTitle={false}>
      <View style={styles.container}>
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={<Text>No movies available</Text>}
          />
        </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLoader: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default WatchScreen;
