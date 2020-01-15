import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      iconSize={23}
      color={Platform.OS === 'android' ? Colors.white : Colors.mainColor}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
