import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png';

const CheckAge = () => {
  const navigation = useNavigation();

  const navigateToPhoneNumber = () => {
    navigation.push('PhoneForm');
  }

  let [fontsLoaded] = useFonts({
    'FrancoisOne': require('../../../assets/fonts/FrancoisOne-Regular.ttf'),
    'Jost': require('../../../assets/fonts/Jost.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else {
    return (
      <View style={styles.container}>
        <View style={styles.adjust}>
          <Image source={craftBeer} style={styles.logo} />
          <Text style={[styles.text, { fontFamily: 'FrancoisOne'} ]}>VOCÊ TEM MAIS DE 18 ANOS?</Text>
          <View style={styles.checkButtons}>
            <TouchableOpacity style={styles.button} onPress={navigateToPhoneNumber}>
              <Text style={[styles.response, { fontFamily: 'Jost' }]}>Sim</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.button}>
              <Text style={[styles.response, { fontFamily: 'Jost' }]}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CheckAge;