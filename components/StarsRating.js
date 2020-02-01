import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

import StarRating from 'react-native-star-rating';

const StarsRating = props => {
  const { size, style, rating } = props;

  return (
    <View style={{ ...styles.container, ...style }}>
      <StarRating
        maxStars={5}
        starSize={size}
        rating={rating}
        disabled={false}
        starStyle={styles.star}
        fullStarColor={Colors.mainColor}
        fullStar={Platform.OS === 'android' ? 'md-star' : 'ios-star'}
        halfStar={Platform.OS === 'android' ? 'md-star-half' : 'ios-star-half'}
        emptyStar={
          Platform.OS === 'android' ? 'md-star-outline' : 'ios-star-outline'
        }
        iconSet={'Ionicons'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  star: {
    paddingHorizontal: 1.5
  }
});

export default StarsRating;
