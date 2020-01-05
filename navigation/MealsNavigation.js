import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

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

export default createAppContainer(MealsNavigation);
