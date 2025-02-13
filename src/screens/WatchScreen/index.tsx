import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Text from '@components/Text';
import getNowPlayingMovies from '@api/getNowPlayingMovies';
import MovieListItem from './components/MovieListItem';
import { Movie } from '@custom_types/api/tmdb';

const WatchScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(true);

  const fetchMovies = async (page: number, isLoadingMore = false) => {
    try {
      if (!isLoadingMore) {
        setIsLoading(true);
      }
      const data = await getNowPlayingMovies(page);
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

  const handleMoviePress = (movie: Movie) => {
    console.log('movie pressed:', movie);
  };

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieListItem
      key={item.id}
      title={item.title}
      posterUrl={item.backdrop_path}
      onPress={() => handleMoviePress(item)}
    />
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text>No movies available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  listContainer: {
    padding: 16,
  },
  footerLoader: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default WatchScreen;
