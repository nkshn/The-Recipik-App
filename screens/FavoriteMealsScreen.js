import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { MEALS } from '../data/random-data';

import MealsList from '../components/MealsList';

const FavoriteMealsScreen = props => {
  const favoriteMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2'
  );

  return <MealsList listData={favoriteMeals} navigation={props.navigation} />;
};

FavoriteMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu2"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoriteMealsScreen;
