import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const navigation = useNavigation();
  const [emailLogIn, setEmailLogIn] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const handleNavigate = () => {
    navigation.navigate('Tabs');
  };

  const handleEmailInputChange = (inputText) => {
    setEmailLogIn(inputText);
  };

  const handlePasswordInputChange = (inputText) => {
    setPasswordLog(inputText);
  };

  const handleButtonLogIn = () => {
    console.log(emailLogIn);
    console.log(passwordLog);
    Alert.alert('Continue as guest, please. The app does not support log in or sign in yet.');
  };

  return (
    <View style={styles.container}>
      {/*Cabeçalho, decoração de folhas e cabeçalho de login*/}
      <Image
        source={require('../assets/Header.png')}
        style={styles.image1}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/deco.png')}
        style={styles.image2}
        resizeMode="cover"
      />
      <Image
        source={require('../assets/LogInHeader.png')}
        style={styles.image3}
        resizeMode="cover"
      />
      {/*Inputs*/}
      <TextInput
        style={[styles.input, styles.boldText]}
        onChangeText={handleEmailInputChange}
        value={emailLogIn}
        placeholder="email"
      />
      <TextInput
        style={[styles.input, styles.boldText]}
        onChangeText={handlePasswordInputChange}
        value={passwordLog}
        placeholder="password"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button01} onPress={handleButtonLogIn}>
          <Text style={styles.text}>Go</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button02} onPress={handleButtonLogIn}>
          <Text style={styles.text}>Sign in instead</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.text}>Continue as a guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5CE1E6',
    flex: 1,
    alignItems: 'center',
  },
  image1: {
    width: 288,
    height: 135.7333333333333333333,
    marginTop: 50,
  },
  image2: {
    width: 314,
    height: 82.666666666666666667,
    marginRight: 80,
    marginTop: 5,
  },
  image3: {
    width: 108,
    height: 60,
  },
  input: {
    width: 288,
    height: 54.666666666666666666666666666667,
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#008056',
    marginTop: 20,
    placeholderTextColor: '#A3B6C6',
    placeholderSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 30,
  },
  button01: {
    backgroundColor: '#004AAD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  button02: {
    backgroundColor: '#004AAD',
    width: 120,
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default LogIn;
