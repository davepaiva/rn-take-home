import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeTabNavigator from '@navigators/HomeBottomTabBar';
import MovieDetailsScreen from '@screens/MovieDetailsScreen';
import BookSeatsScreen from '@screens/BookSeats';
import SelectCinema from '@screens/SelectCinema';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    title: string,
    posterUrl: string,
    description: string,
  };
  SelectCinema: {
    title: string,
  };
  BookSeats: {
    hall: string;
    time: string;
    date: string;
    price: number;
    movieTitle: string;
  };
};


const RootStack = createNativeStackNavigator<RootStackParamList>();

export type MovieDetailsProps = NativeStackScreenProps<RootStackParamList,'MovieDetails'>;
export type BookSeatsProps = NativeStackScreenProps<RootStackParamList,'BookSeats'>;
export type SelectCinemaProps = NativeStackScreenProps<RootStackParamList,'SelectCinema'>;
const RootStackNavigator = () => {
  return (
    <>
      <RootStack.Navigator
      >
        <RootStack.Screen name={'Home'} component={HomeTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name={'MovieDetails'} component={MovieDetailsScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={'BookSeats'} component={BookSeatsScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={'SelectCinema'} component={SelectCinema} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigator;
