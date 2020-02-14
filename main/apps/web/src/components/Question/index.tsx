import React, { useState } from 'react';
import { storeTypes } from 'trivia-main';

import Card from '../Card';

interface QuestionProps {
  question: storeTypes.TriviaQuestion,
  questionId: number,
  onAnswerQuestion: (questionId: number, answer: string) => void,
}

function Question ({question, questionId, onAnswerQuestion}: QuestionProps) {
  const [userAnswer, setUserAnswer] = useState<string>('');

  const handleTextAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  }

  const handleBooelanAnswer = (answer: string) => {
    onAnswerQuestion(questionId, answer);
  }

  const handleQuestionAnswer = () => {
    onAnswerQuestion(questionId, userAnswer);
  }

  return (
    <div>
      <h2>{question.category}</h2>
      <Card>
        <h1>{question.text}</h1>
      </Card>
      {question.type === 'boolean'
        ? (
          <div>
            <button onClick={() => handleBooelanAnswer('True')}>True</button>
            <button onClick={() => handleBooelanAnswer('False')}>False</button>
          </div>
        ) : (
          <div>
            <input
              placeholder="Answer ..."
              onChange={handleTextAnswerChange}
              value={userAnswer}
              onClick={handleQuestionAnswer}
            />
            <button onClick={handleQuestionAnswer}>Answer</button>
          </div>
        )
      }
    </div>
  )
}

export default Question;