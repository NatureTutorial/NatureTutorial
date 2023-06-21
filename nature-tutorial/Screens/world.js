import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class World extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mondial uptates (monthly)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5CE1E6',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});
