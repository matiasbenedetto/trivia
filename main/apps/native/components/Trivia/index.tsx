import React, { useState } from 'react';
import { constants, ConnectedTrivia, TriviaProps  } from 'trivia-main';
import Question from '../Question';
import { View, BackHandler } from 'react-native';
import Loading from './Loading';
import { useFocusEffect, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Navigator';


type TriviaNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TriviaResults'
>;

type TriviaRouteProp = RouteProp<RootStackParamList, 'Trivia'>;

interface TriviaNativeProps extends TriviaProps {
  navigation: TriviaNavigationProp;
  route: TriviaRouteProp;
}

function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested, route, navigation }: TriviaNativeProps) {
  const { params } = route;
  const { loading, fetchNew, questions } = trivia;
  const questionId = params ? params.questionId : 0;

  if (fetchNew) {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
    return (
      <Loading text="Fetching Trivia..." />
    )
  } 

  if (loading) {
    return (
      <Loading text="Loading Trivia..." />
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.push('Home');
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  const onAnswerQuestion = (id: number, answer: string) => {
    const nextId = questionId + 1;
    triviaQuestionAnswer(questionId, answer);
    if (nextId < questions.length) {
      navigation.push("Trivia", {questionId: nextId});
    } else {
      navigation.push("TriviaResults");
    }
  }
  
  return(
    <View>
      <Question
        question={questions[questionId]}
        questionId={questionId}
        onAnswerQuestion={onAnswerQuestion}
      />
    </View>
  )
}

export default ConnectedTrivia(Trivia);
