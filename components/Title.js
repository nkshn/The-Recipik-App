import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Title = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    letterSpacing: 1,
    color: Colors.grey,
    fontFamily: 'lato-bold'
  }
});

export default Title;
