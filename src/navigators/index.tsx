import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '@custom_types/screens/rootstack';
import rootStackScreens from '@custom_types/screens/rootstack';
import HomeTabNavigator from '@navigators/HomeBottomTabBar';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <>
      <RootStack.Navigator
      >
        <RootStack.Screen name={rootStackScreens.Home} component={HomeTabNavigator} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigator;
