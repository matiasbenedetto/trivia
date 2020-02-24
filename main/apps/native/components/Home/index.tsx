import React from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import { ConnectedHome, HomeProps } from 'trivia-main';
import UserInput from '../UserInput';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigator';
import styles from './styles';


type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface HomeNativeProps extends HomeProps {
  navigation: HomeNavigationProp;
}

function Home({ user, navigation }: HomeNativeProps) {
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return(
    <View style={styles.home}>
      <Text style={styles.thinking}>🤔</Text>
      <Text style={styles.h1}>Welcome {user.username} to the trivia challenge!</Text>
      <UserInput />
      <Text style={styles.h2}>You will be presented with 10 True of False questions.</Text>
      <Text style={styles.h2}>🔥 Can you score 100%? 🔥</Text>
      <Button
        title="Begin !"
        onPress={() => navigation.push('Trivia')}
      />
    </View>
  )
}

export default ConnectedHome(Home);
