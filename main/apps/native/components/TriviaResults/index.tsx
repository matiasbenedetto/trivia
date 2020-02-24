import React, { Fragment, useEffect } from 'react';
import { ConnectedTriviaResults, TriviaResultsProps, constants } from 'trivia-main';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';


interface TriviaResultsNativeProps extends TriviaResultsProps {
  navigation: any;
}

const Correct = () => (<Text style={styles.mark}>✔</Text>);
const Inorrect = () => (<Text style={styles.mark}>❌</Text>);

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

const styles = StyleSheet.create({
  triviaResults: {
    padding: 20,
  },
  score: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreAdded: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  scoreMessage: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  results: {
    marginTop: 30,
    marginBottom: 30,
  },
  result: {
    display: 'flex',
    flexDirection: 'row',
  },
  mark:{
    fontSize: 20,
    marginEnd: 10,
  },
  question: {
    fontWeight: 'bold',
    maxWidth: '90%',
  },
  answer: {
    marginBottom: 20,
  }
});
