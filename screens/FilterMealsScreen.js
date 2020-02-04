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

import {
  MaterialCommunityIcons,
  Foundation,
  Ionicons
} from '@expo/vector-icons';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { setFilters } from '../store/actions/meals';

import Title from '../components/Title';
import Colors from '../constants/colors';
import ButtonWithIcon from '../components/ButtonWithIcon';
import TouchableComponent from '../components/TouchableComponent';

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

  const [isActiveComponent, setIsActiveComponent] = useState(false);

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
            <View style={styles.filtersChoosingRowItem}>
              <MaterialCommunityIcons
                name="weight"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.filterChoosingText}>simple</Text>
            </View>
            <View style={styles.filtersChoosingRowItem}>
              <MaterialCommunityIcons
                name="weight"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.filterChoosingText}>challenging</Text>
            </View>
            <View style={styles.filtersChoosingRowItem}>
              <MaterialCommunityIcons
                name="weight"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.filterChoosingText}>hard</Text>
            </View>
          </View>
        </View>
        <View style={styles.filtersChoosingContainer}>
          <Title style={styles.subTitle}>choose affordability:</Title>
          <View style={styles.filtersChoosingRow}>
            <TouchableComponent
              activeOpacity={0.7}
              style={{ flex: 1 }}
              onPress={() => console.log('You chose affordability item')}
            >
              <View
                style={[
                  styles.filtersChoosingRowItem,
                  {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                    backgroundColor: Colors.blockYellow,
                    borderWidth: 1,
                    borderColor: Colors.mainColor
                  }
                ]}
              >
                <View
                  style={{
                    backgroundColor: Colors.mainColor,
                    position: 'absolute',
                    zIndex: 5,
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    bottom: 50,
                    left: 90,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Ionicons
                    name={
                      Platform.OS === 'android'
                        ? 'md-checkmark'
                        : 'ios-checkmark'
                    }
                    size={18}
                    color={Colors.white}
                  />
                </View>
                <Foundation
                  name="dollar-bill"
                  size={24}
                  color={Colors.white}
                  // color={Colors.mainColor}
                />
                <Text
                  style={[styles.filterChoosingText, { color: Colors.white }]}
                >
                  affordable
                </Text>
              </View>
            </TouchableComponent>
            <View style={styles.filtersChoosingRowItem}>
              <Foundation
                name="dollar-bill"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.filterChoosingText}>pricey</Text>
            </View>
            <View style={styles.filtersChoosingRowItem}>
              <Foundation
                name="dollar-bill"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.filterChoosingText}>luxurious</Text>
            </View>
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
            title="Save"
            styleButton={styles.buttonSave}
            styleTitle={{ color: Colors.white }}
            styleIcon={{ color: Colors.white, top: 0.3 }}
            onPress={() => console.log('Pressed button: Save')}
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
    margin: 20
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
    justifyContent: 'space-around',
    marginTop: 15
  },
  filtersChoosingRowItem: {
    width: 103,
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
    borderColor: Colors.mainColor,
    borderColor: Colors.mainColor
  },
  buttonSave: { backgroundColor: 'green' }
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
