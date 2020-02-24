import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AtributionBar () {
  return (
    <View style={styles.atributionBar}>
      <View style={styles.year}><Text>🧪 2020</Text></View>
      <View style={styles.name}><Text>💻 Developed by Matias Benedetto</Text></View>
    </View>
  )
}

export default AtributionBar;

const styles = StyleSheet.create({
  atributionBar: {
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  year: {
    padding: 10,
    borderRightWidth: 1,
  },
  name: {
    padding: 10,
  }
});
