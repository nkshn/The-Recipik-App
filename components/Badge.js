import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import { useSelector } from 'react-redux';

const Badge = () => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const favoritesMealsCounter = favoriteMeals.length;

  let renderCorrectText;

  if (favoritesMealsCounter == 0) {
    renderCorrectText = (
      <View style={{ position: 'absolute' }}>
        <Text></Text>
      </View>
    );
  } else if (favoritesMealsCounter > 9) {
    renderCorrectText = (
      <View style={styles.badgeContainer}>
        <Text style={styles.bagdeTitle}>9+</Text>
      </View>
    );
  } else if (favoritesMealsCounter > 0) {
    renderCorrectText = (
      <View style={styles.badgeContainer}>
        <Text style={styles.bagdeTitle}>{favoritesMealsCounter}</Text>
      </View>
    );
  }

  return <View>{renderCorrectText}</View>;
};

const styles = StyleSheet.create({
  badgeContainer: {
    zIndex: 2,
    position: 'absolute',
    backgroundColor: 'red',
    width: 18,
    height: 18,
    padding: 3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
    bottom: -13
  },
  bagdeTitle: {
    color: Colors.white,
    fontFamily: 'lato-light',
    fontSize: 10
  }
});

export default Badge;
