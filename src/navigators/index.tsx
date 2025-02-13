import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeTabNavigator from '@navigators/HomeBottomTabBar';
import MovieDetailsScreen from '@screens/MovieDetailsScreen';
import BookSeatsScreen from '@screens/BookSeats';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    title: string,
    posterUrl: string,
    description: string,
  };
  BookSeats: undefined;
};


const RootStack = createNativeStackNavigator<RootStackParamList>();

export type MovieDetailsProps = NativeStackScreenProps<RootStackParamList,'MovieDetails'>;
export type BookSeatsProps = NativeStackScreenProps<RootStackParamList,'BookSeats'>;

const RootStackNavigator = () => {
  return (
    <>
      <RootStack.Navigator
      >
        <RootStack.Screen name={'Home'} component={HomeTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name={'MovieDetails'} component={MovieDetailsScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={'BookSeats'} component={BookSeatsScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigator;
