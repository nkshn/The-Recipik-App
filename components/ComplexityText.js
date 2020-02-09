import React from 'react';
import { Text } from 'react-native';

const ComplexityText = props => {
  const { simple, challenging, hard } = props;
  let correctTextOutput;

  if (simple) {
    correctTextOutput = 'simple';
  } else if (challenging) {
    correctTextOutput = 'challenging';
  } else if (hard) {
    correctTextOutput = 'hard';
  }

  return <Text style={props.style}>{correctTextOutput}</Text>;
};

export default ComplexityText;
