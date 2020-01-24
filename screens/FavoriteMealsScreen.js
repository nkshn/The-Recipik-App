import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { MEALS } from '../data/random-data';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';

const FavoriteMealsScreen = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const favoritesMealsCounter = favoriteMeals.length;

  const dynamicCorrectStyle = value => {
    if (value > 0) {
      return {
        flex: 20, // delete later
        justifyContent: 'flex-start'
      };
    } else {
      return {
        flex: 20, // delete later
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
      <View style={styles.favItemsCounterView}>
        <Text style={styles.favText}>
          Favorite Items: {favoritesMealsCounter}
        </Text>
      </View>
    </View>
  );
};

FavoriteMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Your Favorites ' + 2,
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
  },
  favText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'lato-regular'
  },
  favItemsCounterView: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default FavoriteMealsScreen;
