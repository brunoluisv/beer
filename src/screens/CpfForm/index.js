import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png';

const CpfForm = () => {
  const navigation = useNavigation();
  const navigateToUserDataForm = () => {
    navigation.push('UserDataForm');
  }

  let [fontsLoaded] = useFonts({
    'FrancoisOne': require('../../../assets/fonts/FrancoisOne-Regular.ttf'),
    'Jost': require('../../../assets/fonts/Jost.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else {
    return(
      <View style={styles.container}>
        <View style={styles.formImage}>
          <Image source={craftBeer} style={styles.logo}/>
        </View>
        <View style={styles.formText}>
          <Text style={[styles.text, { fontFamily: 'Jost' }]}>Informe seu CPF</Text>
        </View>
        <View>    
          <TextInput 
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="CPF" 
            placeholderTextColor="#CCC"
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={navigateToUserDataForm}>
            <Text style={[styles.textButton, { fontFamily: 'Jost' }]}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CpfForm;