import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import {
  Feather,
  MaterialCommunityIcons,
  Foundation
} from '@expo/vector-icons';

import Colors from '../constants/colors';

import Title from '../components/Title';
import MainButton from '../components/MainButton';
import CorrectDurationOutput from '../components/CorrectDurationOutput';

const Mealtem = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: props.imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Title style={styles.title}>{props.title}</Title>
        <View style={styles.textContainer}>
          <View style={styles.textRowItem}>
            <Feather
              name="clock"
              size={14}
              color={Colors.grey}
              style={styles.icons}
            />
            <CorrectDurationOutput duration={props.duration} />
          </View>
          <View style={styles.textRowItem}>
            <MaterialCommunityIcons
              name="weight"
              size={15}
              color={Colors.grey}
              style={[styles.icons, { marginTop: -1 }]}
            />
            <Text style={styles.textInfo}>{props.complexity}</Text>
          </View>
          <View style={styles.textRowItem}>
            <Foundation
              name="dollar-bill"
              size={21}
              color={Colors.grey}
              style={styles.icons}
            />
            <Text style={styles.textInfo}>{props.affordability}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton
            title="View Recipe"
            style={styles.button}
            onPress={props.onSelectSpecialMeal}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center'
  },
  item: {
    flex: 1,
    width: '90%'
  },
  imageContainer: {
    width: 325,
    height: 185,
    borderRadius: 15,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    marginVertical: 7
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textRowItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfo: {
    fontSize: 15,
    color: Colors.grey,
    fontFamily: 'lato-light',
    textTransform: 'capitalize'
  },
  icons: {
    marginRight: 5
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    marginTop: 10
  }
});

export default Mealtem;
