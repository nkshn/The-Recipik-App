import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import CategoriesGridTile from '../components/CategoriesGridTile';

import Colors from '../constants/colors';

import { CATEGORIES } from '../data/random-data';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelectCategory={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
