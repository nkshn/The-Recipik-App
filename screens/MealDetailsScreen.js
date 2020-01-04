import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is 'MealDetailsScreen.js'</Text>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title="Go Back to all Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10
  }
});

export default MealDetailsScreen;
