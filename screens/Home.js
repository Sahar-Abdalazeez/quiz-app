import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Title from '../components/Title';
const thinkImage = require('../assets/images/thinking-image.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title} title="Quizzler" />
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={thinkImage} />
      </View>
      <TouchableOpacity
        className="start-btn"
        style={styles.button}
        onPress={() => navigation.navigate('Levels')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: '100%',
  },
  title: {
    color: '#f38704',
    fontSize: 40,
  },
  banner: {
    width: 350,
    height: 350,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#f38704',
    padding: 16,
    borderRadius: 16,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
});
