import React from 'react';
import { View } from 'react-native';

import MealsList from '../components/MealsList';

import { CATEGORIES } from '../data/random-data';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
  const caterId = props.navigation.getParam('categoryId');

  const filteredMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = filteredMeals.filter(
    meal => meal.categoryIds.indexOf(caterId) >= 0
  );

  const dynamicCorrectStyle = value => {
    if (value > 0) {
      return {
        flex: 1,
        justifyContent: 'flex-start'
      };
    } else {
      return {
        flex: 1,
        justifyContent: 'center'
      };
    }
  };

  return (
    <View style={dynamicCorrectStyle(displayedMeals.length)}>
      <MealsList
        listData={displayedMeals}
        navigation={props.navigation}
        noItemsTitle="No meals found, check filters"
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

export default CategoryMealsScreen;
