import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import firebase from '../../services/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png';

const CodeForm = () => {
  const route = useRoute();
  const [code, setCode] = useState('');

  const phoneNumber = route.params.phoneNumber;

  const confirmCode = async () => {
    try {
      const verificationId = route.params.verificationId;
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
  
      await firebase.auth().signInWithCredential(credential);

      console.log('Usuario logado com sucesso!');
      navigateToCpfForm();
    } catch(err) {
      Alert.alert(
        'Código Incorreto',
        `Verifique o código enviado para o número ${phoneNumber}`,
        [
          { text: 'OK'}
        ],
        { cancelable: false }
      );
      console.log(err);
    }

  }

  const navigation = useNavigation();

  const navigateToCpfForm = () => {
    navigation.push('CpfForm');
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
          <Text style={[styles.textUp, { fontFamily: 'Jost' }]}>Enviamos um SMS para:</Text>
          <Text style={styles.textDown}>{phoneNumber}</Text>
        </View>
        <View>    
          <TextInput
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="Código" 
            placeholderTextColor="#CCC"
            keyboardType="numeric"
            onChangeText={value => setCode(value)}
          />
        </View>
        <View>
          <TouchableOpacity 
            style={styles.button} 
            onPress={confirmCode}>
            <Text style={[styles.textButton, { fontFamily: 'Jost' }]}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CodeForm;