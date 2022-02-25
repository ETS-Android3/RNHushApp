/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <>
      <StatusBar />
      <RootNavigator />
    </>
  );
};

export default App;
