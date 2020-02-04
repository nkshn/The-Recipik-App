import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import TouchableComponent from '../components/TouchableComponent';

const FilterChoosedItem = props => {
  const { title, isActiveItem, onPress } = props;

  const ActivatedBadge = () => {
    return (
      <View style={styles.activeBadgeContainer}>
        <Ionicons
          size={15} // 16
          color={Colors.white}
          name={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
        />
      </View>
    );
  };

  return (
    <TouchableComponent
      activeOpacity={0.7}
      style={{ flex: 1 }}
      onPress={onPress}
    >
      <View
        style={[
          styles.filtersChoosedRowItem,
          isActiveItem === true ? styles.activeRowItem : ''
        ]}
      >
        {isActiveItem === true ? <ActivatedBadge /> : <View></View>}
        <Foundation
          size={24}
          name="dollar-bill"
          color={isActiveItem === true ? Colors.white : Colors.mainColor}
        />
        <Text
          style={[
            styles.filterChoosedText,
            { color: isActiveItem === true ? Colors.white : Colors.mainColor }
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  filtersChoosedRowItem: {
    width: 102,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: Colors.lighterGreyBackgroud
  },
  filterChoosedText: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: Colors.mainColor,
    fontFamily: 'lato-light'
  },

  activeRowItem: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: Colors.blockYellow,
    borderWidth: 1,
    borderColor: Colors.mainColor
  },
  activeBadgeContainer: {
    backgroundColor: Colors.mainColor,
    position: 'absolute',
    zIndex: 5,
    width: 17, // 20
    height: 17, // 20
    borderRadius: 50,
    bottom: 53, // 50
    left: 92, // 90
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FilterChoosedItem;
