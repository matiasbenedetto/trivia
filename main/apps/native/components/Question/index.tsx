import React, { useState } from 'react';
import { storeTypes } from 'trivia-main';
import Card from '../Card';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


interface QuestionProps {
  question: storeTypes.TriviaQuestion,
  questionId: number,
  onAnswerQuestion: (questionId: number, answer: string) => void,
}

function Question ({question, questionId, onAnswerQuestion}: QuestionProps) {
  const [userAnswer, setUserAnswer] = useState<string>('');

  const handleTextAnswerChange = (value: string) => {
    setUserAnswer(value);
  }

  const handleBooelanAnswer = (answer: string) => {
    onAnswerQuestion(questionId, answer);
  }

  const handleQuestionAnswer = () => {
    onAnswerQuestion(questionId, userAnswer);
  }

  return (
    <View style={styles.question}>
      <Text style={styles.category}>{question.category}</Text>
      <Card>
        <Text style={styles.questionText}>{question.text}</Text>
      </Card>
      <View>
        {question.type === 'boolean'
          ? (
            <View style={styles.booleanButtons}>
              <TouchableOpacity style={[styles.booleanButton, styles.true]} onPress={() => handleBooelanAnswer('True')}>
                <Text style={styles.booleanButtonText}>True</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.booleanButton, styles.false]} onPress={() => handleBooelanAnswer('False')}>
                <Text style={styles.booleanButtonText}>False</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TextInput
                placeholder="Answer ..."
                onChangeText={handleTextAnswerChange}
                value={userAnswer}
              />
              <Button title="Answer" onPress={handleQuestionAnswer} />
            </View>
          )
        }
      </View>
    </View>
  )
}

export default Question;

const styles = StyleSheet.create({
  question: {
    padding: 20,
  },
  category: {
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
  questionText: {
    fontSize: 25,
    textAlign: "center",
  },
  booleanButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  booleanButton: {
    height: 50,
    color: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
  },
  true: {
    backgroundColor: 'blue',
    marginRight: 10,
  },
  false: {
    backgroundColor: 'orangered',
    marginLeft: 10,
  },
  booleanButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});