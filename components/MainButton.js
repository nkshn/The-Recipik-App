import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import TouchableComponent from '../components/TouchableComponent';

const MainButton = props => {
  return (
    <View style={styles.container}>
      <TouchableComponent
        activeOpacity={0.7}
        style={{ flex: 1 }}
        onPress={props.onPress}
      >
        <View style={{ ...props.style, ...styles.button }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.mainColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 14,
    letterSpacing: 1,
    color: Colors.grey,
    textTransform: 'uppercase',
    fontFamily: 'lato-bold'
  }
});

export default MainButton;
