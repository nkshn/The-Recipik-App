import React from 'react';
import { View, FlatList } from 'react-native';

import Mealtem from '../components/Mealtem';

const MealsList = props => {
  const renderMealItem = itemData => {
    return (
      <Mealtem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectSpecialMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: { mealId: itemData.item.id }
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
      />
    </View>
  );
};

export default MealsList;
