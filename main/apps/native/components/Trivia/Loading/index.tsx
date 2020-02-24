import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';


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

const styles = StyleSheet.create({
  loading: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  emojis: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});