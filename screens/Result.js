import React from 'react';
const win = require('../assets/images/win.jpg');
import Title from '../components/Title';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.container}>
      <Title title="Result" />
      <Text>{score}</Text>

      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={win} />
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
    backgroundColor: '#1a759f',
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
