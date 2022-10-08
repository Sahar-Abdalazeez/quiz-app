import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Result = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{}} style={styles.banner} resizeMode="contain" />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
