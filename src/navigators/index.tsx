import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from '@navigators/HomeBottomTabBar';
import MovieDetailsScreen from '@screens/MovieDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    title: string,
    imageUrl: string,
    description: string,
}
};


const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <>
      <RootStack.Navigator
      >
        <RootStack.Screen name={'Home'} component={HomeTabNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name={'MovieDetails'} component={MovieDetailsScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigator;
