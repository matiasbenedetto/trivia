import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { constants, ConnectedTrivia, TriviaProps  } from 'trivia-main';
import Question from '../../components/Question';

import './trivia.scss';


function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested, fetchNew }: TriviaProps) {
  const { questionId } = useParams();
  const history = useHistory();
  const { loading, questions } = trivia;
  const id: number = Number(questionId) || 0;

  if (loading){
    return (<div><h1>Loading New Trivia ... </h1></div>);
  }

  const onAnswerQuestion = (id: number, answer: string) => {
    const nextId = id + 1;
    triviaQuestionAnswer(id, answer);
    if (nextId < questions.length) {
      history.push(`/trivia/${nextId}/`);
    } else {
      history.push('/trivia/results');
    }
  }

  if (fetchNew) {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
    history.push('/trivia/0');
    return (<div><h1>Fetching New Trivia ...</h1></div>);
  }else {
    const selectedQuestion = trivia.questions[id];
    return(
      <div className="trivia">
        <Question
          questionId={id}
          question={selectedQuestion}
          onAnswerQuestion={onAnswerQuestion}
        />
      </div>
    )
  }
}

export default ConnectedTrivia(Trivia);