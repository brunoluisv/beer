import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const DrinkButton = () => {
  const navigation = useNavigation();

  const navigateToDrinks = () => {
    navigation.navigate('Drink');
  }

  return (
    <TouchableOpacity onPress={navigateToDrinks}>
      <View style={styles.container}>
        <LinearGradient style={styles.button} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#66ff33', '#0B6121']}>
          <Ionicons name="ios-beer" size={36} color='#FFF'/>
          <Text style={styles.text}>Tap</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>

  );
}

export default DrinkButton;