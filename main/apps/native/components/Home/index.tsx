import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { ConnectedHome, HomeProps, ConnectedUserInput } from 'trivia-main';
import UserInput from '../UserInput';

interface HomeNativeProps extends HomeProps {
  navigation: any;
}

function Home({ user, navigation }: HomeNativeProps) {
  return(
    <View style={styles.home}>
      <Text style={styles.thinking}>🤔</Text>
      <Text style={styles.h1}>Welcome {user.username} to the trivia challenge!</Text>
      <UserInput />
      <Text style={styles.h2}>You will be presented with 10 True of False questions.</Text>
      <Text style={styles.h2}>🔥 Can you score 100%? 🔥</Text>
      <Button
        title="Begin !"
        onPress={() => navigation.push('Trivia')}
      />
    </View>
  )
}

export default ConnectedHome(Home);

const styles = StyleSheet.create({
  home: {
    padding: 30,
  },
  thinking: {
    textAlign:'center',
    fontSize: 50,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  }
});