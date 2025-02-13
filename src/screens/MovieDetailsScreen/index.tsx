import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { renderTMDBImage } from '@app_utils/helperfuncs';
import { MovieDetailsProps } from '@navigators/MovieNavigator';
import palette from '@styles/palette';
import LinearGradient from 'react-native-linear-gradient';
import Text from '@components/Text';
import Button from '@components/Button';
import Tag from '@components/Tag';
import globalStyles from '@styles/globalStyles';
import Screen from '@components/Screen';

type Genre = {
  id: number;
  name: string;
  color: string;
};



const GENRES: Genre[] = [
  { id: 1, name: 'Action', color: palette.tag_cyan },
  { id: 2, name: 'Thriller', color: palette.tag_pink },
  { id: 3, name: 'Science', color: palette.tag_purple },
  { id: 4, name: 'Fiction', color: palette.tag_gold },
];

const MovieDetailsScreen: React.FC<MovieDetailsProps> = ({ route }) => {

  return (
    <Screen horizontalPadding={0} showNavbar title="Watch" transparentNavbar centerTitle={false}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <ImageBackground
          source={{ uri: renderTMDBImage(route.params.posterUrl, 500) }}
          style={styles.posterImage}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['transparent', '#000000']}
            style={styles.gradient}
          >
            <View style={styles.heroContentContainer}>
            <Button variant="primary" title="Get Tickets" onPress={() => {}} />
            <Button variant="secondary" title="Watch Trailer" onPress={() => {}} leftIcon={'play'} />
            </View>
          </LinearGradient>
        </ImageBackground>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.genresSection} variant="primary">Genres</Text>
          <View style={styles.genresContainer}>
            {GENRES.map((genre) => (
                <Tag key={genre.id} label={genre.name} color={genre.color} />
            ))}
          </View>
          <View style={[styles.divider, globalStyles.divider]} />
          <Text variant="primary">Overview</Text>
          <Text style={styles.descriptionSection} variant='secondary'>
              {route.params.description}
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.surface_primary,
  },
  headerContainer: {
    alignItems: 'center',
  },
  posterImage: {
    width: '100%',
    height: 500,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  releaseDate: {
    fontSize: 16,
    color: '#CCCCCC',
    marginTop: 8,
  },
  ticketButton: {
    backgroundColor: '#1CD6CE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
    marginTop: 20,
  },
  ticketButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trailerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  trailerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroContentContainer: {
    gap: 10,
    width: 243,
    marginBottom: 34,
  },
  contentContainer: {
    paddingHorizontal: 40,
  },
  genresSection: {
    marginTop: 27,
  },
  genresContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexWrap: 'wrap',
  },
  genreTag: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  genreText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  divider: {
    marginTop: 22,
    marginBottom: 15,
  },
  descriptionSection: {
    marginTop: 14,
  },
});

export default MovieDetailsScreen;
