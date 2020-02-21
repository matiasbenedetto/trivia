import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { ConnectedHome, HomeProps, ConnectedUserInput } from 'trivia-main';
import UserInput from '../UserInput';

function Home({ user }: HomeProps) {
  return(
    <View style={styles.home}>
      <Text style={styles.h1}>Welcome {user.username} to the trivia challenge!</Text>
      <UserInput />
      <Text style={styles.h2}>Yo will be presented with 10 True of False questions.</Text>
      <Text style={styles.h2}>Can you score 100%?</Text>
      <Button
          title="Begin !"
          onPress={() => Alert.alert('Hello trivia player')}
      />
    </View>
  )
}

export default ConnectedHome(Home);

const styles = StyleSheet.create({
  home: {
    padding: 30,
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