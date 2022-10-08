import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View style={styles.top}>
          <Text>imagine this is really cool question </Text>
        </View>
        <TouchableOpacity>
          <Text>Cool option1 </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option2 </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option3 </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option4 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    backgroundColor: 'red',
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
