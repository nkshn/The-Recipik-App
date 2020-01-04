import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/random-data';

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItem} backgroundColor={itemData.item.color}>
      <Text style={styles.title}>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = props => {
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

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: 'lato-regular',
    textTransform: 'capitalize'
  }
});

export default CategoriesScreen;
