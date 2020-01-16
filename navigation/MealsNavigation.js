import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {} from 'react-native-paper';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import Colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteMealsScreen from '../screens/FavoriteMealsScreen';

const MealsNavigation = createStackNavigator(
  {
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetails: { screen: MealDetailsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: Colors.mainColor },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        letterSpacing: 1,
        fontFamily: 'lato-bold'
      }
    }
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: tabInfo => {
        return (
          <MaterialIcons
            name="restaurant-menu"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      }
    }
  },
  Favorite: {
    screen: FavoriteMealsScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: tabInfo => {
        return <AntDesign name="star" size={25} color={tabInfo.tintColor} />;
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

export default createAppContainer(MealsFavTabNavigation);
