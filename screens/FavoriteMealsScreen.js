import React from 'react';

import { MEALS } from '../data/random-data';

import MealsList from '../components/MealsList';

const FavoriteMealsScreen = props => {
  const favoriteMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealsList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoriteMealsScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
};

export default FavoriteMealsScreen;
