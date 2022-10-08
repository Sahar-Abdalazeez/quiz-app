import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Title from '../components/Title';
const staticImage = require('../assets/images/Exams-amico.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.imageContainer}>
        <Image style={styles.banner} source={staticImage} />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  banner: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    width: 400,
    height: 400,
  },
});
