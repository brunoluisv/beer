import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import styles from './styles';
import craftBeer from '../../../assets/images/beer.png';
import choppeira from '../../../assets/images/choppeira.jpeg';
import store from '../../../assets/images/beer_store.jpg';
import lab from '../../../assets/images/lab_store.jpg';
import open from '../../../assets/images/store_open.jpg';

const Home = () => {
  let [fontsLoaded] = useFonts({
    'FrancoisOne': require('../../../assets/fonts/FrancoisOne-Regular.ttf'),
    'Jost': require('../../../assets/fonts/Jost.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor="#FFF"
          barStyle="dark-content"
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={craftBeer} style={styles.logo}/>
          </View>
          <View style={styles.headerText}>
            <Text style={[styles.text, {fontFamily: 'FrancoisOne'}]}>AQUI ESTOU FELIZ</Text>
          </View>
          <View style={styles.body}>
            <TouchableOpacity style={styles.card}>
              <Image source={choppeira} style={styles.image}/>
              <Text style={[styles.textChoppeira, {fontFamily: 'FrancoisOne'}]}>
                LIBERE A TORNEIRA COM SEU SMARTHPHONE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={store} style={styles.image}/>
              <Text style={[styles.textStore, {fontFamily: 'FrancoisOne'}]}>
                FUN STORE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={lab} style={styles.image}/>
              <Text style={[styles.textLab, {fontFamily: 'FrancoisOne'}]}>
                CHOPPERS LAB MAIO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, {height: 390, marginTop: 0}]}>
              <Image source={open} style={styles.card}/>
              <Text style={[styles.textOpen, {fontFamily: 'FrancoisOne'}]}>
                HORÁRIO ESPECIAL DE ATENDIMENTO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Home;