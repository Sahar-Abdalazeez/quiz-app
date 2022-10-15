import React from 'react';
const win = require('../assets/images/highscore.png');
import LottieView from 'lottie-react-native';

import Title from '../components/Title';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.container}>
      <Title style={styles.title} title="Result" />
      <Text style={styles.score}>{score}</Text>

      <View style={styles.bannerContainer}>
        <LottieView
          height={500}
          width={500}
          style={styles.banner}
          source={require('../assets/animations/winner.json')}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    color: '#f38704',
    fontSize: 40,
  },
  score: {
    color: '#f38704',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
  banner: {
    width: 500,
  },
  bannerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#f38704',
    padding: 12,
    borderRadius: 16,
    marginBottom: 30,
    alignItems: 'center',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
