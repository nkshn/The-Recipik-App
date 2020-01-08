import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';

const TouchableComponent = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return <TouchableComponent {...props}>{props.children}</TouchableComponent>;
};

export default TouchableComponent;
