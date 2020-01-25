import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, Platform, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { setFilters } from '../store/actions/meals';

import Title from '../components/Title';
import Colors from '../constants/colors';

const FilterMealsScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan
    };

    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = props => {
    return (
      <View style={styles.filtersItem}>
        <Text style={styles.text}>{props.title}</Text>
        <Switch
          value={props.value}
          onValueChange={props.onChange}
          trackColor={{ true: Colors.mainColor }}
          thumbColor={Platform.OS === 'android' ? Colors.mainColor : ''}
        />
      </View>
    );
  };

  return (
    <View>
      <Title style={styles.title}>Available Filters / Restriction</Title>
      <View style={styles.filterContainer}>
        <FilterSwitch
          title="Gluten Free Meals"
          value={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          title="Vegan Meals"
          value={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        />
        <FilterSwitch
          title="Vegetarian Meals"
          value={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        />
        <FilterSwitch
          title="Lactose Free Meals"
          value={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20
  },
  filterContainer: {
    alignItems: 'center'
  },
  filtersItem: {
    width: '85%',
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: Colors.lighterGreyText
  },
  text: {
    fontSize: 18,
    color: Colors.grey,
    fontFamily: 'lato-regular'
  }
});

FilterMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Meals Filter',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="md-save"
          onPress={() => {
            Alert.alert(
              'Saved!',
              'Filters were successfully saved!',
              [
                {
                  text: 'Okey',
                  onPress: navigationData.navigation.getParam('save'),
                  style: 'default'
                }
              ],
              { cancelable: false }
            );
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FilterMealsScreen;
