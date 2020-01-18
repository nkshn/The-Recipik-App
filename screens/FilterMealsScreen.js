import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is 'FilterMealsScreen.js'</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

FilterMealsScreen.navigationOptions = {
  headerTitle: 'Meals Filter'
};

export default FilterMealsScreen;
