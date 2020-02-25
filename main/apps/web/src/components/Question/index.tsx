import React, { useState } from 'react';
import { storeTypes } from 'trivia-main';
import Card from '../Card';
import Emoji from '../../components/Emoji';

import './question.scss';


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
    <div className="question">
      <h2><Emoji char="👇" label="pointing finger" /> {question.category} <Emoji char="👇" label="pointing finger" /></h2>
      <Card>
        <h1>{question.text}</h1>
      </Card>
      <div className="actions">
        {question.type === 'boolean'
          ? (
            <div>
              <button className="true" onClick={() => handleBooelanAnswer('True')}><Emoji char="👍" label="True"/> True</button>
              <button className="false" onClick={() => handleBooelanAnswer('False')}><Emoji char="👎" label="False"/> False</button>
            </div>
          ) : (
            <div>
              <input
                placeholder="Answer ..."
                onChange={handleTextAnswerChange}
                value={userAnswer}
              />
              <button onClick={handleQuestionAnswer}>Answer</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Question;