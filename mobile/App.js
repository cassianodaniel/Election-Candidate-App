import React from 'react';
import { TouchableOpacity, View, Text, Alert, StatusBar } from 'react-native';

import * as Facebook from 'expo-facebook';

import Routes from './src/routes';

import styles from './styles';

import api from  './services/api';

export default function App() {

  const faceBookId = "673141756877289";

  const cadApoio = async function(infosJson) {
    const idFbc = infosJson.id;
    const name = infosJson.name;
    const email = infosJson.email;

    await api.post('/apoiadores', {
      id: idFbc,
      email: email,
      apoiado: "Zezim"
    }).then(() => {
      Alert.alert(`Cadastrado ${idFbc}!`);
    }).catch(() => {
      Alert.alert(`Erro`);
    });
    
  }

  const login = async() => {
    try {
      await Facebook.initializeAsync(faceBookId);
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile','email']});
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,first_name,last_name,email`);
        const {id, last_name,name, first_name, email, public_profile } = (await response.json());

        cadApoio({ name : name, email: email, id: id}); 
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <>
      <StatusBar backgroundColor={'#293f7b'}/>
      <Routes />
      <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => login()}
                style={styles.TouchableOpacityStyle}>
                <View style={styles.View}>
                    <Text style={styles.Text}>Apoiar   +</Text>
                </View>
      </TouchableOpacity>
    </>
  );
}
