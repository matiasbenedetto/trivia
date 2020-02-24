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
import AtributionBar from './components/AtributionBar';
import UserBar from './components/UserBar';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerLeft: null}}>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <UserBar /> }} />
          <Stack.Screen name="Trivia" component={Trivia} options={{ headerTitle: props => <UserBar /> }} />
          <Stack.Screen name="TriviaResults" component={TriviaResults} options={{ headerTitle: props => <UserBar /> }} />
        </Stack.Navigator>
        <AtributionBar />
      </Provider>
    </NavigationContainer>
  );
}
