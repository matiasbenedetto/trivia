import React, { Fragment, useEffect } from 'react';
import { ConnectedTriviaResults, TriviaResultsProps, constants } from 'trivia-main';
import { View, Text, Button } from 'react-native';


interface TriviaResultsNativeProps extends TriviaResultsProps {
  navigation: any;
}

const Correct = () => (<Text>✔</Text>);
const Inorrect = () => (<Text>❌</Text>);

function TriviaResults ({ trivia, scoreSet, getScoreMessage, triviaFetchRequested, navigation }: TriviaResultsNativeProps) {
  const { questions } = trivia;
  const triviaScore: number = questions.filter(
    q => q.correctAswer === q.userAnswer
  ).length;
  const scoreMessage = getScoreMessage(triviaScore);

  useEffect(()=>{
    scoreSet('+', triviaScore);
  });

  const handleTryAgain = () => {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
    navigation.push("Trivia");
  }

  return (
    <View>
      <View>
        <Text>You scored {triviaScore} / {questions.length}</Text>
        <Text>{triviaScore} points were added to your score</Text> 
        <Text>{scoreMessage}</Text>
        <Button
          title="Try Again"
          onPress={() => (handleTryAgain())}
        />
      </View>
      <View>
        {questions.map((question, i) => {
          const isCorrect = question.correctAswer === question.userAnswer;
          return (
            <Fragment key={i}>
              <View>
                {isCorrect ? <Correct /> : <Inorrect/>}
              </View>
              <View>
                <Text>{question.text}</Text>
                <Text>Your Answer: {question.userAnswer}</Text>
              </View>
            </Fragment>
          )
        })}
      </View>
    </View>
  )
}

export default ConnectedTriviaResults(TriviaResults);
