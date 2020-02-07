import { MEALS } from '../../data/random-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '..//actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealID
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealID);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;

      // const complexityAffordabilityFilter = state.meals;
      const complexityAffordabilityFilter = state.meals.filter(meal => {
        // Affordability Checkers
        if ((appliedFilters.affordable && appliedFilters.luxurious) && (meal.isAffordable || meal.isLuxurious)) {
          return true;
        }
        if (appliedFilters.affordable && meal.isAffordable) {
          return true;
        }
        if (appliedFilters.pricey && meal.isPricey) {
          return true;
        }
        if (appliedFilters.luxurious && meal.isLuxurious) {
          return true;
        }

        // Complexity Checkers
        if ((appliedFilters.simple && appliedFilters.hard) && (meal.isSimple || meal.isHard)) {
          return true;
        }
        if (appliedFilters.simple && meal.isSimple) {
          return true;
        }
        if (appliedFilters.challenging && meal.isChallenging) {
          return true;
        }
        if (appliedFilters.hard && meal.isHard) {
          return true;
        }

        // Checkers if all Affordability items is disabled
        if (!appliedFilters.affordable && !appliedFilters.pricey && !appliedFilters.luxurious) {
          return true;
        }
        // Checkers if all Complexity items is disabled
        if (!appliedFilters.simple && !appliedFilters.challenging && !appliedFilters.hard) {
          return true;
        }
        return false;
      });

      const updatedFilteredMeals = complexityAffordabilityFilter.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
