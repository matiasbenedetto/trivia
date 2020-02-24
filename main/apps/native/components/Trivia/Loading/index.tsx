import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';


function Loading ({text}) {
  return(
    <View style={styles.loading}>
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
  loadingText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});