import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: require('../assets/user2.png'),
      userName: 'DefaultUserName',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Título do perfil */}
        <Text style={styles.text}>Profile</Text>

        {/* Imagem de perfil */}
        <Image
          source={this.state.profileImage}
          style={styles.image1}
          resizeMode="cover"
        />

        {/* Nome de usuário */}
        <Text style={styles.userNameText}>{this.state.userName}</Text>
        {/* Títulos dos containers */}
        <View style={titleStyles.horizontalContainerTitles}>
          <View style={titleStyles.horizontalContainerTitles}>
            <Text
              style={{ fontWeight: 'bold', marginLeft: 15, marginRight: 80 }}>
              Badges
            </Text>
            <Text style={{ fontWeight: 'bold', marginRight: 70 }}>Posts</Text>
            <Text style={{ fontWeight: 'bold' }}>Transactions</Text>
          </View>
        </View>
        {/* Containers */}
        <View style={styles.horizontalContainer}>
          {/* Container 1 */}
          <View style={styles.imageContainer1}>
            <View style={styles.verticalBarbadges} />
            <View style={styles.img}>
              <Image
                source={require('../assets/flowershining.png')}
                style={styles.image2}
                resizeMode="cover"
              />
              <Text>You does not</Text>
              <Text>earn any badges!</Text>
            </View>
            <View style={styles.verticalBarbadges} />
          </View>

          {/* Container 2 */}
          <View style={styles.imageContainer2}>
            <View style={styles.verticalBarbadges} />
            <View style={styles.img}>
              <Image
                source={require('../assets/flowershining.png')}
                style={styles.image2}
                resizeMode="cover"
              />
              <Text>You do not</Text>
              <Text>posted anything</Text>
              <Text>yet.</Text>
            </View>
            <View style={styles.verticalBarbadges} />
          </View>

          {/* Container 3 */}
          <View style={styles.imageContainer3}>
            <View style={styles.verticalBarbadges} />
            <View style={styles.img}>
              <Image
                source={require('../assets/flowershining.png')}
                style={styles.image2}
                resizeMode="cover"
              />
              <Text>You do not</Text>
              <Text>maked any</Text>
              <Text>transactions yet.</Text>
            </View>
            <View style={styles.verticalBarbadges} />
          </View>
        </View>
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
  imageContainer1: {
    flexDirection: 'row', // Para alinhar os elementos em uma linha
    alignItems: 'center', // Para alinhar verticalmente
    paddingRight: 5,
  },
  imageContainer2: {
    flexDirection: 'row', // Para alinhar os elementos em uma linha
    alignItems: 'center', // Para alinhar verticalmente
  },
  imageContainer3: {
    flexDirection: 'row', // Para alinhar os elementos em uma linha
    alignItems: 'center', // Para alinhar verticalmente
    paddingLeft: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalBarbadges: {
    backgroundColor: 'black',
    width: 2,
    height: 330,
    marginHorizontal: 5,
  },
  image1: {
    width: 200,
    height: 200,
  },
  image2: {
    width: 100,
    height: 100,
  },
  userNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});

const titleStyles = StyleSheet.create({
  horizontalContainerTitles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
});
