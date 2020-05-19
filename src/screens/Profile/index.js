import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import styles from './styles';

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleSetImage = (image) => {
    setImage(image);
  }

  const _pickImage = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1
      });

      if(!result.cancelled) {
        handleSetImage(result.uri);
      }
    } catch(err) {
      console.log(err);
    }
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
        <View style={styles.header}>
          <TouchableOpacity style={styles.photoMoldure} onPress={_pickImage}>
            {image ? (
              <Image source={{uri: image}} style={styles.photoMoldure}/>
            ) : (
              <>
                <FontAwesome name="user-circle" size={160} color='#CCC'/>
                <View style={styles.cameraIcon}>
                  <FontAwesome name="camera-retro" size={25} color="#FFF"/>
                </View>
              </>
            )}
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