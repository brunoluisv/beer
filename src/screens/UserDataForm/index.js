import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png'

const UserDataForm = () => {
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userDtNasc, setUserDtNasc] = useState('');

  let [fontsLoaded] = useFonts({
    'FrancoisOne': require('../../../assets/fonts/FrancoisOne-Regular.ttf'),
    'Jost': require('../../../assets/fonts/Jost.ttf')
  });

  const navigation = useNavigation();
  const navigateToTabsRoutes = () => {
    navigation.push('TabsRoutes');
  }

  if(!fontsLoaded) {
    return <AppLoading/>
  }else {
    return (
      <View style={styles.container}>
        <View style={styles.formImage}>
          <Image source={craftBeer} style={styles.logo}/>
        </View>
        <View style={styles.formText}>
          <Text style={[styles.text, { fontFamily: 'Jost' }]}>Informe seus Dados</Text>
        </View>
        <View>
          <TextInput 
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="Nome" 
            placeholderTextColor="#CCC"
            value={userName}
            onChangeText={value => setUserName(value)}
          />
          <TextInput 
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="Sobrenome" 
            placeholderTextColor="#CCC"
            value={userLastName}
            onChangeText={value => setUserLastName(value)}
          />
          <TextInput  
            style={[styles.input, { fontFamily: 'Jost' }]}
            placeholder="Data de Nascimento" 
            placeholderTextColor="#CCC"
            keyboardType="number-pad"
            value={userDtNasc}
            onChangeText={value => setUserDtNasc(value)}/>
        </View>

        <View style={styles.informText}>
          <Text style={{fontFamily: 'Jost', textAlign: 'center'}}>
            Clicando em cadastrar você declara ter 
            <Text style={{fontFamily: 'FrancoisOne'}}> 18 anos</Text> ou mais e concorda com 
            <Text style={{fontFamily: 'FrancoisOne'}}> Termos de Uso e Política de Privacidade.</Text>
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={navigateToTabsRoutes}>
            <Text style={[styles.textButton, { fontFamily: 'Jost' }]}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default UserDataForm;