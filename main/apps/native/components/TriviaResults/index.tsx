import React, { useCallback } from 'react';
import { ConnectedTriviaResults, TriviaResultsProps, constants } from 'trivia-main';
import { View, Text, Button, ScrollView, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigator';
import styles from './styles';

type TriviaResultsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TriviaResults'
>;

interface TriviaResultsNativeProps extends TriviaResultsProps {
  navigation: TriviaResultsNavigationProp;
}

const Correct = () => (<Text style={styles.mark}>✔</Text>);
const Inorrect = () => (<Text style={styles.mark}>❌</Text>);

function TriviaResults ({ trivia, scoreSet, getScoreMessage, triviaFetchRequested, navigation }: TriviaResultsNativeProps) {
  const { questions } = trivia;
  const triviaScore: number = questions.filter(
    q => q.correctAswer === q.userAnswer
  ).length;
  const scoreMessage = getScoreMessage(triviaScore);

  const handleTryAgain = () => {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
    navigation.push("Trivia");
  }

  useFocusEffect(
    useCallback(() => {
      scoreSet('+', triviaScore);
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.push('Home');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <ScrollView style={styles.triviaResults}>
      <View>
        <Text style={styles.score}>You scored {triviaScore}/{questions.length} {scoreMessage.face}</Text>
        <Text style={styles.scoreAdded}>{triviaScore} points were added to your score</Text> 
        <Text style={styles.scoreMessage}>{scoreMessage.text}</Text>
        <Button
          title="Try Again"
          onPress={() => (handleTryAgain())}
        />
      </View>
      <View style={styles.results}>
        {questions.map((question, i) => {
          const isCorrect = question.correctAswer === question.userAnswer;
          return (
            <View style={styles.result} key={i}>
              <View>
                {isCorrect ? <Correct /> : <Inorrect/>}
              </View>
              <View>
                <Text style={styles.question}>{question.text}</Text>
                <Text style={styles.answer}>Your Answer: {question.userAnswer}</Text>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default ConnectedTriviaResults(TriviaResults);
