import React from 'react';
import { View, Text } from 'react-native';
import { ConnectedUserBar, UserBarProps } from 'trivia-main';
import styles from './styles';


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
