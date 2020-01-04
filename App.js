import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigation from './navigation/MealsNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    'lato-light': require('./assets/fonts/Lato-Light.ttf'),
    'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={error => console.log(error)}
      />
    );
  }

  return <MealsNavigation />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#777',
    fontFamily: 'lato-regular',
    fontSize: 20
  }
});
