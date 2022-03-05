/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
