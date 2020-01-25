import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';

const FavoriteMealsScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const favoritesMealsCounter = favoriteMeals.length;

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
    <View style={styles.mainView}>
      <View style={dynamicCorrectStyle(favoritesMealsCounter)}>
        <MealsList
          listData={favoriteMeals}
          navigation={props.navigation}
          noItemsTitle="No favorite meals yet"
        />
      </View>
    </View>
  );
};

FavoriteMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your Favorites ',
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

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column'
  }
});

export default FavoriteMealsScreen;
