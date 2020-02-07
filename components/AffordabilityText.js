import React from 'react';
import { Text } from 'react-native';

const AffordabilityText = props => {
  const { affordable, pricey, luxurious } = props;
  let correctTextOutput;

  if (affordable) {
    correctTextOutput = 'afforgable';
  } else if (pricey) {
    correctTextOutput = 'pricey';
  } else if (luxurious) {
    correctTextOutput = 'luxurious';
  }

  return <Text style={props.style}>{correctTextOutput}</Text>;
};

export default AffordabilityText;
