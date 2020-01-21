import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
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

const ListItem = props => {
  return (
    <View style={styles.recipeDetailsRenderItem}>
      <View style={styles.recipeDetailsDot}></View>
      <Text style={styles.recipeDetailsElement}>{props.data}</Text>
    </View>
  );
};

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
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
        <View style={styles.recipeDetailsContainer}>
          <Title style={styles.recipeDetailsTitle}>ingredients</Title>
          {selectedMeal.ingredients.map(ingredient => (
            <ListItem data={ingredient} key={ingredient} />
          ))}
        </View>
        <View style={[styles.recipeDetailsContainer, { width: '90%' }]}>
          <Title style={styles.recipeDetailsTitle}>steps</Title>
          {selectedMeal.steps.map(step => (
            <ListItem data={step} key={step} />
          ))}
        </View>
      </View>
    </ScrollView>
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
    flex: 1,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
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
  },

  recipeDetailsContainer: {
    alignSelf: 'center',
    marginTop: 13
  },
  recipeDetailsTitle: {
    fontSize: 20,
    color: Colors.grey,
    textAlign: 'center',
    fontFamily: 'lato-regular',
    textTransform: 'capitalize',
    letterSpacing: 1,
    marginBottom: 7
  },
  recipeDetailsRenderItem: {
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  recipeDetailsDot: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.grey,
    backgroundColor: Colors.grey,
    marginRight: 5
  },
  recipeDetailsElement: {
    color: Colors.grey,
    fontFamily: 'lato-light'
  }
});

export default MealDetailsScreen;
