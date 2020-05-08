import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import styles from './styles';
import stannis from '../../assets/stannis.jpeg';

const Profile = () => {
  let [fontsLoaded] = useFonts({
    'AmaticSCRegular': require('../../../assets/fonts/AmaticSC-Regular.ttf'),
    'AmaticSCBold': require('../../../assets/fonts/AmaticSC-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.bodycard}>
            <Image source={stannis} style={styles.logo} />
          </View>
          <View style={styles.footercard}>
            <Text style={{color: "#FFF", fontFamily: 'AmaticSCBold', fontSize: 26}}>Cadastrar Cartão</Text>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput style={[styles.input, {fontFamily: 'AmaticSCBold'}]} placeholder="Nome" placeholderTextColor="#000" />
          <TextInput style={[styles.input,{fontFamily: 'AmaticSCBold'}]} placeholder="Número do Cartão" placeholderTextColor="#000" />
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.confirm, {fontFamily: 'AmaticSCBold'}]}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;