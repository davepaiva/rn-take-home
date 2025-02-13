import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchScreen from '@screens/WatchScreen';
import MovieDetailsScreen from '@screens/MovieDetailsScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type MovieStackParamList = {
    Watch: undefined;
    MovieDetails: {
        title: string,
        posterUrl: string,
        description: string,
    }
  };

export type MovieDetailsProps = NativeStackScreenProps<MovieStackParamList,'MovieDetails'>;

const MovieStackNav = createNativeStackNavigator<MovieStackParamList>();

const MovieStackNavigator = () => {
  return (
    <>
      <MovieStackNav.Navigator
      >
        <MovieStackNav.Screen name={'Watch'} component={WatchScreen} options={{ headerShown: false }} />
        <MovieStackNav.Screen
          name={'MovieDetails'}
          component={MovieDetailsScreen}
          options={{ headerShown: false }}
        />
      </MovieStackNav.Navigator>
    </>
  );
};

export default MovieStackNavigator;
