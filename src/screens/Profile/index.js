import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

const Profile = () => {
  let [fontsLoaded] = useFonts({
    'FrancoisOne': require('../../../assets/fonts/FrancoisOne-Regular.ttf'),
    'Jost': require('../../../assets/fonts/Jost.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.photoMoldure}>
            <FontAwesome name="user-circle" size={160} color='#CCC'/>
            <View style={styles.cameraIcon}>
              <FontAwesome name="camera-retro" size={25} color="#FFF"/>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerName}>
          <Text style={[styles.name, {fontFamily: 'FrancoisOne'}]}>BRUNO LUIS</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.mydata}>
            <FontAwesome name="user-circle" size={50} color='#000'/>
            <Text style={[styles.mydataText, {fontFamily: 'Jost'}]}>Meus Dados</Text>
            <MaterialIcons name="navigate-next" size={36} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.addCard}>
          <Text style={[styles.infotext, {fontFamily: 'FrancoisOne'}]}>CARTÕES</Text>
          <TouchableOpacity style={styles.add}>
            <Text style={[{fontSize: 16, fontFamily: 'Jost'}]}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addStreet}>
          <Text style={[styles.infotext, {fontFamily: 'FrancoisOne'}]}>ENDEREÇOS</Text>
          <TouchableOpacity style={styles.add}>
            <Text style={[{fontSize: 16, fontFamily: 'Jost'}]}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;