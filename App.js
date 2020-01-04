import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

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

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  text: {
    color: '#777',
    textAlign: 'center',
    fontFamily: 'lato-regular',
    fontSize: 20
  }
});
