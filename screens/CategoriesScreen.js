import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Colors from '../constants/colors';

import { CATEGORIES } from '../data/random-data';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        activeOpacity={0.7}
        onPress={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id }
          })
        }
      >
        <View backgroundColor={itemData.item.color}>
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
    fontFamily: 'lato-light',
    textTransform: 'capitalize'
  }
});

export default CategoriesScreen;
