import React from 'react';
import {
  View,
  Text,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {} from 'react-native-paper';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteMealsScreen from '../screens/FavoriteMealsScreen';
import FilterMealsScreen from '../screens/FilterMealsScreen';

import Title from '../components/Title';

const defaultStackOptionsConfig = {
  headerStyle: { backgroundColor: Colors.mainColor },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    right: 15,
    width: 250,
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

const customDrawerComponent = props => {
  return (
    <SafeAreaView style={styles.saveArea}>
      <View style={styles.imageContainer}>
        <Title style={styles.title}>The Meals Application</Title>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/logo.jpg')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.navigationItemsContainer}>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigation,
      navigationOptions: {
        drawerLabel: 'Favorite Meals',
        drawerIcon: tabInfo => {
          return (
            <Ionicons
              size={25}
              name="md-star-outline"
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Filters: {
      screen: FilterStackNavigator,
      navigationOptions: {
        drawerLabel: 'Filters',
        drawerIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              size={20}
              name="filter-outline"
              color={tabInfo.tintColor}
            />
          );
        }
      }
    }
  },
  {
    contentComponent: customDrawerComponent,
    contentOptions: {
      inactiveTintColor: Colors.grey,
      activeTintColor: Colors.mainColor,
      activeBackgroundColor: '#d95b5261',
      labelStyle: {
        right: 20,
        letterSpacing: 1,
        fontSize: 16,
        fontFamily: 'lato-regular'
      }
    }
  }
);

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' && Platform.Version >= 21 ? 25 : ''
  },
  imageContainer: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    letterSpacing: 2,
    marginVertical: 20,
    fontFamily: 'lato-bold'
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  navigationItemsContainer: {
    marginTop: -5
  }
});

export default createAppContainer(MainNavigator);
