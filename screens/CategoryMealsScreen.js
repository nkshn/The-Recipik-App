import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import { CATEGORIES } from '../data/random-data';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is 'CategoryMealsScreen.js'</Text>
      <Button
        title="NEXT: Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetails' });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const caterId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === caterId);

  return {
    headerTitle: selectedCategory.title + ' Meals'
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
    color: Colors.white,
    fontSize: 18,
    marginBottom: 10
  }
});

export default CategoryMealsScreen;
