import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Result from '../screens/Result';
import Quiz from '../screens/Quiz';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}
export default MyStack;
