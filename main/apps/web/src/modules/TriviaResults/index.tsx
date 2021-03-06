import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ConnectedTriviaResults, TriviaResultsProps, constants } from 'trivia-main';
import Emoji from '../../components/Emoji';

import './triviaResults.scss';


const Correct = () => (<span className="correct" role="img" aria-label="Correct">✔</span>);
const Inorrect = () => (<span className="incorrect" role="img" aria-label="Inorrect">❌</span>);

function TriviaResults ({ trivia, scoreSet, getScoreMessage, triviaFetchRequested }: TriviaResultsProps) {
  const history = useHistory();
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
    history.push("/trivia");
  }

  return (
    <div className="trivia-results">
      <div>
        <h1><Emoji char={scoreMessage.face} label="face" /> You scored {triviaScore}/{questions.length} <Emoji char={scoreMessage.face} label="face" /></h1>
        <small>{triviaScore} points were added to your score</small> 
        <h2>{scoreMessage.text}</h2>
        <button onClick={handleTryAgain} className="try-again">Try Again <Emoji char="💪" label="try again" /></button>           
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
