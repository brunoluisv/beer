import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from '../../services/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png';

const PhoneForm = () => {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        '+55'+phoneNumber, 
        recaptchaVerifier.current
      );
  
      navigateToCodeForm(phoneNumber, id);
    }catch(err) {
      console.log(err);
    }

  }

  const navigation = useNavigation();
  const navigateToCodeForm = (phoneNumber, verificationId) => {
    navigation.push('CodeForm', { 
      phoneNumber: phoneNumber, 
      verificationId: verificationId
    });
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
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
        />
        <View style={styles.formImage}>
          <Image source={craftBeer} style={styles.logo}/>
        </View>
        <View style={styles.formText}>
          <Text style={styles.textUp}>Insira o celular</Text>
          <Text style={[styles.textDown, { fontFamily: 'Jost' }]}>para fazer o login</Text>
        </View>
        <View>    
          <TextInput 
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="DDD+Telefone" 
            placeholderTextColor="#CCC"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={value => setPhoneNumber(value)}
          />
        </View>
        <View>
          <TouchableOpacity 
            style={styles.button} 
            onPress={sendVerification}>
            <Text style={[styles.textButton, { fontFamily: 'Jost' }]}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PhoneForm;