import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Title from '../components/Title';
import Colors from '../constants/colors';

const ListIsEmpty = props => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>No favorite meals yet</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'lato-regular'
  }
});

export default ListIsEmpty;
