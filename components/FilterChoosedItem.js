import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Foundation, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';
import SpecificIcon from '../components/SpecificIcon';
import TouchableComponent from '../components/TouchableComponent';

const FilterChoosedItem = props => {
  const { title, isActiveItem, onPress, iconName, iconComponent } = props;

  const ActivatedBadge = () => {
    return (
      <View style={styles.activeBadgeContainer}>
        <Ionicons
          size={15}
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
        <SpecificIcon
          size={24}
          name={iconName}
          style={{ top: -1 }}
          iconComponent={iconComponent}
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
    width: 105,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: Colors.lighterGreyText,
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
    width: 18, // 20 - 17
    height: 18, // 20 - 17
    borderRadius: 50,
    bottom: 51, // 50 - 53
    left: 91, // 90 - 92
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FilterChoosedItem;
