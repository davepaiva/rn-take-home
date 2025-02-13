import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '@screens/DashboardScreen';
import MediaLibraryScreen from '@screens/MediaLibraryScreen';
import MoreScreen from '@screens/MoreScreen';
import WatchScreen from '@screens/WatchScreen';
import BottomTabBar from '@components/BottomTabBar';
const BottomTabNavigator = createBottomTabNavigator();





const HomeTabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator tabBar={BottomTabBar} screenOptions={{ headerShown: false }}>
      <BottomTabNavigator.Screen name="Dashboard" component={DashboardScreen} />
      <BottomTabNavigator.Screen name="Watch" component={WatchScreen}  />
      <BottomTabNavigator.Screen name="Media" component={MediaLibraryScreen} />
      <BottomTabNavigator.Screen name="More" component={MoreScreen} />
    </BottomTabNavigator.Navigator>
  );
};


export default HomeTabNavigator;
