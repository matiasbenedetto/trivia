import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { constants } from 'trivia-main';

import { ConnectedTrivia, TriviaProps } from 'trivia-main';
import Question from '../../components/Question';


function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested }: TriviaProps) {
  const { questionId } = useParams();
  const history = useHistory();
  const { loading, questions } = trivia;
  const id: number = Number(questionId) || 1;

  const handleRequestNewTrivia = () => {
    triviaFetchRequested(constants.TRIVIA_DEFAULT_SETTINGS);
  }

  const onAnswerQuestion = (id: number, answer: string) => {
    triviaQuestionAnswer(id, answer);
    const nextId = id + 1;
    if (nextId < questions.length) {
      history.push(`/trivia/${nextId}/`);
    } else {
      history.push('trivia/results');
    }
  }

  if (!loading && !questions.length) {
    handleRequestNewTrivia();
  }

  if (loading){
    return (<div><h1>Loading New Trivia ...</h1></div>);
  }

  if (questions.length) {
    const selectedQuestion = trivia.questions[id];
    return(
      <div>
        <Question
          questionId={id}
          question={selectedQuestion}
          onAnswerQuestion={onAnswerQuestion}
        />
      </div>
    )
  }

  return (<div>Eroor</div>);
}

export default ConnectedTrivia(Trivia);
