import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ImageBackground} from 'react-native';
import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
