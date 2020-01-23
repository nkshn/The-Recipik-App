import React from 'react';

import MealsList from '../components/MealsList';

import { CATEGORIES, MEALS } from '../data/random-data';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
  const caterId = props.navigation.getParam('categoryId');

  const filteredMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = filteredMeals.filter(
    meal => meal.categoryIds.indexOf(caterId) >= 0
  );

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const caterId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === caterId);

  return {
    headerTitle: selectedCategory.title + ' Meals'
  };
};

export default CategoryMealsScreen;
