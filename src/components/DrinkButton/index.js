import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const DrinkButton = () => {
  return (
    <View>
      <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
        <Icon name="plus" size={26} color='#FFF'/>
      </LinearGradient>
    </View>
  );
}

export default Drink;