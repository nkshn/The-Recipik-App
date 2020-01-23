import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { MEALS } from '../data/random-data';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';

const FavoriteMealsScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

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
