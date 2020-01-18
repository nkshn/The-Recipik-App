import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {} from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteMealsScreen from '../screens/FavoriteMealsScreen';
import FilterMealsScreen from '../screens/FilterMealsScreen';

const defaultStackOptionsConfig = {
  headerStyle: { backgroundColor: Colors.mainColor },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    letterSpacing: 1,
    fontFamily: 'lato-bold'
  }
};

const FavoriteStackNavigation = createStackNavigator(
  {
    Favorites: { screen: FavoriteMealsScreen },
    MealDetails: { screen: MealDetailsScreen }
  },
  {
    defaultNavigationOptions: defaultStackOptionsConfig
  }
);

const MealsNavigation = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetails: { screen: MealDetailsScreen }
  },
  {
    defaultNavigationOptions: defaultStackOptionsConfig
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="md-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorite: {
    screen: FavoriteStackNavigation,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: tabInfo => {
        return <Ionicons name="md-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const MealsFavTabNavigation =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.mainColor,
        barStyle: {
          backgroundColor: Colors.lighterGrey
        },
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: { activeTintColor: Colors.mainColor }
      });

const FilterStackNavigator = createStackNavigator({
  Filter: FilterMealsScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigation,
  Filters: FilterStackNavigator
});

export default createAppContainer(MainNavigator);
