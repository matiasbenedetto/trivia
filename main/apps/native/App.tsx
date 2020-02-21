import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { store } from 'trivia-main';

import Home from './components/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
