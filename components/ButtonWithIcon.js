import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import Title from '../components/Title';
import TouchableComponent from '../components/TouchableComponent';

const ButtonWithIcon = props => {
  const {
    title,
    styleButton,
    styleTitle,
    styleIcon,
    onPress,
    iconName
  } = props;

  return (
    <View style={styles.container}>
      <TouchableComponent
        activeOpacity={0.7}
        style={{ flex: 1 }}
        onPress={onPress}
      >
        <View style={{ ...styles.buttonBody, ...styleButton }}>
          <View style={styles.buttonContent}>
            <Ionicons
              name={iconName}
              size={21}
              color={Colors.white}
              style={{ ...styles.icon, ...styleIcon }}
            />
            <Title style={{ ...styles.title, ...styleTitle }}>{title}</Title>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden'
  },
  buttonBody: {
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 17
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10
  },
  title: {
    fontSize: 21,
    fontFamily: 'lato-regular',
    color: Colors.white
  }
});

export default ButtonWithIcon;
