import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { store } from 'trivia-main';
import Home from './components/Home';
import Trivia from './components/Trivia';
import TriviaResults from './components/TriviaResults';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Trivia" component={Trivia} />
          <Stack.Screen name="TriviaResults" component={TriviaResults} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
