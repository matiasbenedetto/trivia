import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface CardProps {
  children: ReactNode
}

function Card ({ children }: CardProps) {
  return(
    <View>
      {children}
    </View>
  )
}

export default Card;