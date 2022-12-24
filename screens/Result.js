import React from 'react';
import {Image, ScrollView} from 'react-native';
const win = require('../assets/images/sad-face.png');

import LottieView from 'lottie-react-native';

import Title from '../components/Title';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <ScrollView style={styles.container} flexGrow={1}>
      <Title style={styles.title} title="Result" />
      <Text style={styles.score}>{score}</Text>

      <View style={styles.bannerContainer}>
        {score > 40 ? (
          <LottieView
            height={400}
            width={400}
            style={styles.banner}
            source={require('../assets/animations/winner.json')}
            autoPlay
            loop
          />
        ) : (
          <Image source={win} style={{width: 200, height: 200}} />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%',
    flex: 1,
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
    width: 450,
  },
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: 400,
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
