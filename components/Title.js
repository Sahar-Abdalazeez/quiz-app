import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Title = () => {
  return (
    <View style={styles.container}>
      <Text>Quizzler</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
});

export default Title;
