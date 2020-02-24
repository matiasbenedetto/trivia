import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ConnectedTriviaResults, TriviaResultsProps } from 'trivia-main';

import './triviaResults.scss';


const Correct = () => (<span className="correct" role="img" aria-label="Correct">✔</span>);
const Inorrect = () => (<span className="incorrect" role="img" aria-label="Inorrect">❌</span>);

function TriviaResults ({ trivia, scoreSet, getScoreMessage }: TriviaResultsProps) {
  const { questions } = trivia;
  const triviaScore: number = questions.filter(
    q => q.correctAswer === q.userAnswer
  ).length;
  const scoreMessage = getScoreMessage(triviaScore);

  useEffect(()=>{
    scoreSet('+', triviaScore);
  });

  return (
    <div className="trivia-results">
      <div>
        <h1>You scored {triviaScore} / {questions.length}</h1>
        <small>{triviaScore} points were added to your score</small> 
        <h2>{scoreMessage}</h2>
        <Link to={'/trivia/new'} className="try-again">Try Again</Link>           
      </div>
      <div  className="questions">
        {questions.map((question, i) => {
          const isCorrect = question.correctAswer === question.userAnswer;
          return (
            <Fragment key={i}>
              <div className="result">
                {isCorrect ? <Correct /> : <Inorrect/>}
              </div>
              <div className="text">
                <p>{question.text}</p>
                <p>Your Answer: <strong>{question.userAnswer}</strong></p>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ConnectedTriviaResults(TriviaResults);
