import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: ReactNode
}

function Card ({ children }: CardProps) {
  return(
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 60,
    borderRadius: 10,
    padding: 20,
  },
});
