import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Player from '../screens/Player';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={TabNavigator}
        />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
