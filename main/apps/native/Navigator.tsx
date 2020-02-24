import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Trivia from './components/Trivia';
import TriviaResults from './components/TriviaResults';
import UserBar from './components/UserBar';


export type RootStackParamList = {
  Home: undefined;
  Trivia: { questionId: number } | undefined;
  TriviaResults: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerLeft: null}}>
    <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <UserBar /> }} />
    <Stack.Screen name="Trivia" component={Trivia} options={{ headerTitle: props => <UserBar /> }} />
    <Stack.Screen name="TriviaResults" component={TriviaResults} options={{ headerTitle: props => <UserBar /> }} />
  </Stack.Navigator>
);

export default Navigator;
