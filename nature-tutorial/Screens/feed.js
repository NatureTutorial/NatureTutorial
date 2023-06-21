import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Feed</Text>
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
