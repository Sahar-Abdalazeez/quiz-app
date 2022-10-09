import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
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
          <Text onPress={() => navigation.navigate('Home')}>Home</Text>
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
