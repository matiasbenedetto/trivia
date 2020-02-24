import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function AtributionBar () {
  return (
    <View style={styles.atributionBar}>
      <View style={styles.year}><Text>🧪 2020</Text></View>
      <View style={styles.name}><Text>💻 Developed by Matias Benedetto</Text></View>
    </View>
  )
}

export default AtributionBar;
