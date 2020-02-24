import React, { useState } from 'react';
import { constants, ConnectedTrivia, TriviaProps  } from 'trivia-main';
import Question from '../Question';
import { View, Text } from 'react-native';

interface TriviaNativeProps extends TriviaProps {
  navigation: any;
  route: any;
}

function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested, route, navigation }: TriviaNativeProps) {
  const { params = {} } = route;
  const { loading, fetchNew, questions } = trivia;
  const { questionId } = params;
  const selectedQuestionId = Number(questionId) || 0;

  if (fetchNew) {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
    return (
      <View>
        <Text>Fetching Trivia...</Text>
      </View>
    )
  } 

  if (loading) {
    return (
      <View>
        <Text>Loading Trivia...</Text>
      </View>
    );
  }

  const onAnswerQuestion = (id: number, answer: string) => {
    const nextId = selectedQuestionId + 1;
    triviaQuestionAnswer(selectedQuestionId, answer);
    if (nextId < questions.length) {
      navigation.push("Trivia", {questionId: nextId});
    } else {
      navigation.push("TriviaResults");
    }
  }
  
  return(
    <View>
      <Question
        question={questions[selectedQuestionId]}
        questionId={selectedQuestionId}
        onAnswerQuestion={onAnswerQuestion}
      />
    </View>
  )
}

export default ConnectedTrivia(Trivia);
