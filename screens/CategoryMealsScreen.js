import React from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';

import Mealtem from '../components/Mealtem';

import { CATEGORIES, MEALS } from '../data/random-data';

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <Mealtem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  const caterId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === caterId);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(caterId) >= 0
  );

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      {/* <Button
        title="NEXT: Meal Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetails' });
        }}
      /> */}
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const caterId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === caterId);

  return {
    headerTitle: selectedCategory.title + ' Meals'
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
