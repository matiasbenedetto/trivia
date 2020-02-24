import React, { useState } from 'react';
import { storeTypes } from 'trivia-main';
import Card from '../Card';
import { View, Text, Button, TextInput } from 'react-native';


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
    <View>
      <Text>{question.category}</Text>
      <Card>
        <Text>{question.text}</Text>
      </Card>
      <View>
        {question.type === 'boolean'
          ? (
            <View>
              <Button title="True" onPress={() => handleBooelanAnswer('True')} />
              <Button title="False" onPress={() => handleBooelanAnswer('False')} />
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