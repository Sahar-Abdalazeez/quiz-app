import React from 'react';

import Title from '../components/Title';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const Levels = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title} title="Levels" />
      <View style={styles.levelsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', {difficulty: 'easy'})}>
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', {difficulty: 'medium'})}>
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz', {difficulty: 'hard'})}>
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Levels;

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
  levelsContainer: {
    marginTop: 40,
    shadowColor: '#f6ab4f',
    shadowOffset: {width: 5, height: 7},
    shadowOpacity: 0.6,
    shadowRadius: 3,
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
