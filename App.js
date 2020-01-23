import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigation from './navigation/MealsNavigation';

import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

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
    <Provider store={store}>
      <MealsNavigation />
    </Provider>
  );
}
