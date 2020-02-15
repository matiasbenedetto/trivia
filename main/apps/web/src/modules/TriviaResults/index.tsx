import React from 'react';
import { ConnectedTriviaResults, TriviaResultsProps } from 'trivia-main';


function TriviaResults ({ trivia, scoreSet }: TriviaResultsProps) {
  const { questions } = trivia;
  const triviaScore: number = questions.filter(
    (question) => question.correctAswer === question.userAnswer
  ).length;

  return (
    <div>
      <div>
        <h1>You scored {triviaScore} / {questions.length}</h1>
      </div>
      {questions.map((question, i) =>(
        <div key={i}>
          <div>{question.correctAswer === question.userAnswer ? 'CORRECT' : 'INCORRECT'}</div>
          <p>{question.text}</p>
        </div>
      ))}
    </div>
  )
}

export default ConnectedTriviaResults(TriviaResults);
