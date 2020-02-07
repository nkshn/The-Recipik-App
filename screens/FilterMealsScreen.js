import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Switch,
  Platform,
  Alert,
  ScrollView,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { setFilters } from '../store/actions/meals';

import Title from '../components/Title';
import Colors from '../constants/colors';
import ButtonWithIcon from '../components/ButtonWithIcon';
import FilterChoosedItem from '../components/FilterChoosedItem';

const FilterMealsScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  // Affordability
  const [isAffordableActive, setIsAffordableActive] = useState(false); // true
  const [isPriceyActive, setIsPriceyActive] = useState(false); // true
  const [isLuxuriousActive, setIsLuxuriousActive] = useState(false); // true

  // Complexity
  const [isSimpleActive, setIsSimpleActive] = useState(false); // true
  const [isChallengingActive, setIsChallengingActive] = useState(false); // true
  const [isHardActive, setIsHardActive] = useState(false); // true

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan,

      // Affordability
      affordable: isAffordableActive,
      pricey: isPriceyActive,
      luxurious: isLuxuriousActive,

      // Complexity
      simple: isSimpleActive,
      challenging: isChallengingActive,
      hard: isHardActive
    };

    console.log('---- Affordability ----');
    console.log('afforgable: ' + appliedFilters.affordable);
    console.log('pricey: ' + appliedFilters.pricey);
    console.log('luxurious: ' + appliedFilters.luxurious + '\n');

    console.log('---- Complexity ----');
    console.log('simple: ' + appliedFilters.simple);
    console.log('challenging: ' + appliedFilters.challenging);
    console.log('hard: ' + appliedFilters.hard + '\n');

    dispatch(setFilters(appliedFilters));
  }, [
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,

    // Affordability
    isAffordableActive,
    isPriceyActive,
    isLuxuriousActive,

    // Complexity
    isSimpleActive,
    isChallengingActive,
    isHardActive,

    dispatch
  ]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = props => {
    return (
      <View style={styles.filtersSwitchItem}>
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <Title style={styles.title}>Available Filters / Restriction</Title>
        <View style={styles.filterSwitchContainer}>
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
        <View style={styles.filtersChoosingContainer}>
          <Title style={styles.subTitle}>choose complexity:</Title>
          <View style={styles.filtersChoosingRow}>
            <FilterChoosedItem
              title="simple"
              iconName="weight"
              iconComponent="MaterialCommunityIcons"
              isActiveItem={isSimpleActive}
              onPress={() => setIsSimpleActive(!isSimpleActive)}
            />
            <FilterChoosedItem
              title="challenging"
              iconName="weight"
              iconComponent="MaterialCommunityIcons"
              isActiveItem={isChallengingActive}
              onPress={() => setIsChallengingActive(!isChallengingActive)}
            />
            <FilterChoosedItem
              title="hard"
              iconName="weight"
              iconComponent="MaterialCommunityIcons"
              isActiveItem={isHardActive}
              onPress={() => setIsHardActive(!isHardActive)}
            />
          </View>
        </View>
        <View style={styles.filtersChoosingContainer}>
          <Title style={styles.subTitle}>choose affordability:</Title>
          <View style={styles.filtersChoosingRow}>
            <FilterChoosedItem
              title="affordable"
              iconName="dollar-bill"
              iconComponent="Foundation"
              isActiveItem={isAffordableActive}
              onPress={() => setIsAffordableActive(!isAffordableActive)}
            />
            <FilterChoosedItem
              title="pricey"
              iconName="dollar-bill"
              iconComponent="Foundation"
              isActiveItem={isPriceyActive}
              onPress={() => setIsPriceyActive(!isPriceyActive)}
            />
            <FilterChoosedItem
              title="luxurious"
              iconName="dollar-bill"
              iconComponent="Foundation"
              isActiveItem={isLuxuriousActive}
              onPress={() => setIsLuxuriousActive(!isLuxuriousActive)}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonWithIcon
            title="Reset"
            styleButton={styles.buttonReset}
            styleTitle={{ color: Colors.mainColor }}
            styleIcon={{ color: Colors.mainColor, top: 0.3 }}
            onPress={() => console.log('Pressed button: Reset')}
            iconName={Platform.OS === 'android' ? 'md-close' : 'ios-close'}
          />
          <ButtonWithIcon
            title="Apply"
            styleButton={styles.buttonApply}
            styleTitle={{ color: Colors.white }}
            styleIcon={{ color: Colors.white, top: 0.3 }}
            onPress={() => {
              Alert.alert(
                'Saved!',
                'Filters were successfully saved!',
                [
                  {
                    text: 'Okey',
                    onPress: saveFilters,
                    style: 'default'
                  }
                ],
                { cancelable: false }
              );
            }}
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20
  },
  filterSwitchContainer: {
    alignItems: 'center'
  },
  filtersSwitchItem: {
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
  },
  subTitle: {
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: 'lato-bold'
  },
  filtersChoosingContainer: {
    marginTop: 23,
    marginBottom: 7
  },
  filtersChoosingRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // space-between
    marginTop: 15
    // marginLeft: -3 // maybe delete later
  },
  filtersChoosingRowItem: {
    width: 102,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: Colors.lighterGreyBackgroud
  },
  filterChoosingText: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: Colors.mainColor,
    fontFamily: 'lato-light'
  },
  buttonsContainer: {
    marginHorizontal: 30,
    marginTop: 25,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonReset: {
    borderWidth: 1,
    borderColor: Colors.mainColor
  },
  buttonApply: {
    borderWidth: 1,
    borderColor: Colors.applyButtonGreen,
    backgroundColor: Colors.applyButtonGreen
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
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
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
