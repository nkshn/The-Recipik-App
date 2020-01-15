import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { MEALS } from '../data/random-data';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{selectedMeal.title}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Go Back to all Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  }
});

export default MealDetailsScreen;
