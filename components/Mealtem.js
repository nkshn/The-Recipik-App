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
import StarsRating from '../components/StarsRating';
import AffordabilityText from '../components/AffordabilityText';
import ComplexityText from '../components/ComplexityText';
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
        <StarsRating
          size={17}
          rating={props.rating}
          style={styles.ratingContainer}
        />
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
            <ComplexityText
              simple={props.simple}
              challenging={props.challenging}
              hard={props.hard}
              style={styles.textInfo}
            />
          </View>
          <View style={styles.textRowItem}>
            <Foundation
              name="dollar-bill"
              size={21}
              color={Colors.grey}
              style={styles.icons}
            />
            <AffordabilityText
              affordable={props.affordable}
              pricey={props.pricey}
              luxurious={props.luxurious}
              style={styles.textInfo}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton title="Let's Cook!" onPress={props.onSelectSpecialMeal} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    paddingVertical: 17,
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
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  image: {
    width: '100%',
    height: '100%'
  },
  ratingContainer: {
    marginTop: 7,
    marginBottom: 3
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 6
  },
  textContainer: {
    marginBottom: 10,
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
  }
});

export default Mealtem;
