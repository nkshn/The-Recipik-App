import React from 'react';
import { Text, Platform } from 'react-native';
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
    width: 225,
    letterSpacing: 1,
    fontFamily: 'lato-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'lato-regular'
  }
};

const FavoriteStackNavigation = createStackNavigator(
  {
    Favorites: { screen: FavoriteMealsScreen },
    MealDetails: { screen: MealDetailsScreen }
  },
  { defaultNavigationOptions: defaultStackOptionsConfig }
);

const MealsNavigation = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetails: { screen: MealDetailsScreen }
  },
  { defaultNavigationOptions: defaultStackOptionsConfig }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'lato-regular' }}>Meals</Text>
        ) : (
          'Meals'
        ),
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
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'lato-regular' }}>Favorites</Text>
        ) : (
          'Favorites'
        ),
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
          backgroundColor: Colors.lighterGreyBackgroud
        },
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: { fontFamily: 'lato-regular' },
          activeTintColor: Colors.mainColor
        }
      });

const FilterStackNavigator = createStackNavigator(
  { Filter: FilterMealsScreen },
  { defaultNavigationOptions: defaultStackOptionsConfig }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigation,
      navigationOptions: {
        drawerLabel: 'Favorite Meals'
      }
    },
    Filters: {
      screen: FilterStackNavigator,
      navigationOptions: {
        drawerLabel: 'Filters'
      }
    }
  },
  {
    contentOptions: {
      inactiveTintColor: Colors.grey,
      activeTintColor: Colors.mainColor,
      labelStyle: {
        letterSpacing: 1,
        fontSize: 16,
        fontFamily: 'lato-regular'
      }
    }
  }
);

export default createAppContainer(MainNavigator);
