import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {
  Feather,
  MaterialCommunityIcons,
  Foundation
} from '@expo/vector-icons';

import { MEALS } from '../data/random-data';

import Colors from '../constants/colors';

import Title from '../components/Title';
import CustomHeaderButton from '../components/CustomHeaderButton';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Text
          style={{
            fontSize: 20,
            letterSpacing: 1,
            fontFamily: 'lato-bold',
            color: Colors.white,
            textAlign: 'center'
          }}
        >
          Image
        </Text>
      </View>
      <Title style={styles.mealTitle}>{selectedMeal.title}</Title>
      <View style={styles.infoGraphicContainer}>
        <View style={styles.infoRowItem}>
          <Feather
            name="clock"
            size={14}
            color={Colors.grey}
            style={styles.infoIcons}
          />
          <Text style={styles.textInfo}>{selectedMeal.duration} min</Text>
        </View>
        <View style={styles.infoRowItem}>
          <MaterialCommunityIcons
            name="weight"
            size={15}
            color={Colors.grey}
            style={[styles.infoIcons, { marginTop: -1 }]}
          />
          <Text style={styles.textInfo}>{selectedMeal.complexity}</Text>
        </View>
        <View style={styles.infoRowItem}>
          <Foundation
            name="dollar-bill"
            size={21}
            color={Colors.grey}
            style={styles.infoIcons}
          />
          <Text style={styles.textInfo}>{selectedMeal.affordability}</Text>
        </View>
      </View>
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="md-star-outline"
          onPress={() => console.log('Meal Favorite')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  imageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: Colors.grey,
    justifyContent: 'center'
  },
  mealTitle: {
    fontSize: 22,
    marginTop: 10,
    textAlign: 'center'
  },
  infoGraphicContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: '80%'
  },
  infoRowItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoIcons: {
    marginRight: 5
  },
  textInfo: {
    fontSize: 15,
    color: Colors.grey,
    fontFamily: 'lato-light',
    textTransform: 'capitalize'
  }
});

export default MealDetailsScreen;
