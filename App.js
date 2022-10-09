import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
