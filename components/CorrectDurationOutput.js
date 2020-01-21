import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CorrectDurationOutput = props => {
  const { duration } = props;

  let hours;
  let minutes;

  let outputDurationItem;

  if (duration > 60) {
    hours = duration / 60;
    minutes = duration - Math.floor(hours) * 60;

    if (minutes > 0) {
      outputDurationItem = (
        <Text style={styles.text}>
          {Math.floor(hours)} h. {Math.floor(minutes)} min
        </Text>
      );
    } else {
      outputDurationItem = (
        <Text style={styles.text}>{Math.floor(hours)} hours</Text>
      );
    }
  } else {
    outputDurationItem = <Text style={styles.text}>{duration} min</Text>;
  }

  return <View>{outputDurationItem}</View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginTop: 3,
    color: '#969696',
    fontFamily: 'lato-light',
    textTransform: 'lowercase'
  }
});

export default CorrectDurationOutput;
