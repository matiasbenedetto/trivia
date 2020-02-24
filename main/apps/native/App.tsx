import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from 'trivia-main';
import AtributionBar from './components/AtributionBar';
import Navigator from './Navigator';




export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
        <AtributionBar />
      </Provider>
    </NavigationContainer>
  );
}
