import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';

function Loading ({text}) {
  return(
    <View style={styles.loading}>
      <Text style={styles.emojis}>🤔💭</Text>
      <Text style={styles.loadingText}>{text}</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default Loading;
