import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Mealtem from '../components/Mealtem';
import ListIsEmpty from '../components/ListIsEmpty';

const MealsList = props => {
  const favoriteMeal = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavoriteMeal = favoriteMeal.some(
      meal => meal.id === itemData.item.id
    );
    return (
      <Mealtem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        rating={itemData.item.rating}
        afforgable={itemData.item.isAffordable}
        pricey={itemData.item.isPricey}
        luxurious={itemData.item.isLuxurious}
        onSelectSpecialMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavoriteMeal
            }
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListIsEmpty title={props.noItemsTitle} />}
      />
    </View>
  );
};

export default MealsList;
