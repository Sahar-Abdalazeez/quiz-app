import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Title from '../components/Title';
const staticImage = require('../assets/images/Exams-amico.png');
const homeImage = require('../assets/images/feedback.png');

const Home = ({navigation}) => {
  console.log('====hello');
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={homeImage} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#1a759f',
    padding: 16,
    borderRadius: 16,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
