import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import stannis from '../../../assets/images/stannis.jpeg';
import brahma from '../../../assets/images/chopp-brahma2.png'

const Partners = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>NOSSOS CLIENTES</Text>
        <Text>Aqui se encontram alguns de nossos clientes</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.partner}>
          <View style={styles.partnerContainer}>
            <View>
              <Image source={stannis} style={styles.logo}/>
            </View>
            <View style={{width: 250, alignItems: 'center'}}>
              <Text style={styles.text}>Stannis - Jaragua do Sul - SC</Text>    
            </View>       
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.partner2}>
          <View style={styles.partnerContainer}>
            <View>
              <Image source={brahma} style={styles.logo2}/>
            </View>
            <View style={{width: 250, alignItems: 'center'}}>
              <Text style={styles.text}>Parque Brahma - Joinville - SC</Text>    
            </View>       
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Partners;