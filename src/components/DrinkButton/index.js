import React from 'react';
import { View, Text, TouchableHighlight, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

buttonSize = new Animated.Value(1);
mode = new Animated.Value(0);

handlePress = () => {
  Animated.sequence([
    Animated.timing(this.buttonSize, {
      toValue: 0.95,
      duration: 200
    }),
    Animated.timing(this.buttonSize, {
      toValue: 1
    }),
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0
    })
  ]).start();
}

const DrinkButton = () => {
  const sizeStyle = {
    transform: [{ scale: this.buttonSize }]
  }

  const rotation = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-45deg"]
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[ styles.button, sizeStyle ]}>
        <TouchableHighlight onPress={this.handlePress} underlayColor="#0B6121">
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <Ionicons name="ios-beer" size={34} color="#FFF"/>
          </Animated.View>
        </TouchableHighlight>
        <Text style={styles.text}>Tap</Text>
      </Animated.View>
    </View>
  );
}

export default DrinkButton;