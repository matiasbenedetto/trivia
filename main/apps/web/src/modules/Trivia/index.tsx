import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { constants, ConnectedTrivia, TriviaProps  } from 'trivia-main';
import Question from '../../components/Question';

import './trivia.scss';


function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested }: TriviaProps) {
  const { questionId } = useParams();
  const history = useHistory();
  const { loading, questions } = trivia;
  const id: number = Number(questionId) || 0;

  const handleRequestNewTrivia = () => {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
  }

  const onAnswerQuestion = (id: number, answer: string) => {
    const nextId = id + 1;
    triviaQuestionAnswer(id, answer);
    console.log(id, nextId);
    if (nextId < questions.length) {
      history.push(`/trivia/${nextId}/`);
    } else {
      history.push('/trivia/results');
    }
  }

  if (!loading && !questions.length) {
    handleRequestNewTrivia();
  }

  if (loading){
    return (<div><h1>Loading New Trivia ... </h1></div>);
  }

  if (questions.length) {
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

  return (<div>Error</div>);
}

export default ConnectedTrivia(Trivia);
