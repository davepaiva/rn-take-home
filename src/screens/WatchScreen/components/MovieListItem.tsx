import React from 'react';
import { 
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MovieListItemProps {
  title: string;
  posterUrl: string;
  onPress: () => void;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ title, posterUrl, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500/${posterUrl}` }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', '#000000']}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default MovieListItem;
