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
    borderWidth: 0.7,
    borderColor: Colors.grey,
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    letterSpacing: 1,
    color: Colors.white,
    fontFamily: 'lato-bold'
  }
});

export default MainButton;
