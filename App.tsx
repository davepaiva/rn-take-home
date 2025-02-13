import React from 'react';
import RootStack from '@navigators/index';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import globalStyles from '@styles/globalStyles';


export default function App() {
  return (
    <SafeAreaView style={globalStyles.f1}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}




