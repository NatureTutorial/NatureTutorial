import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Navigators from './navigation/Navigators'

export default function App() {
  return <Navigators />;
}

//NOVO! Versão 1.2, com a aba learning! 
//Nova descoberta: scrollview sem barra vertical
//Nova descoberta: elementos do html no react ./screens/learning, linha de codigo 300