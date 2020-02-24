import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ConnectedUserBar, UserBarProps } from 'trivia-main';


function UserBar({ username, score }: UserBarProps) {
  return (
    <View style={styles.userBar}>
      <View style={styles.username}>
        <Text>{username || 'Anonymous User'}</Text>
      </View>
      <View style={styles.score}>
        <Text>Score: {score}</Text>
      </View>
    </View>
  )
};

export default ConnectedUserBar(UserBar);

const styles = StyleSheet.create({
  userBar: {
    display: 'flex',
    flexDirection: 'row',
  },
  username: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  score: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});
