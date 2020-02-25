import React from 'react';
import { useParams, useHistory, Redirect } from "react-router-dom";
import { constants, ConnectedTrivia, TriviaProps  } from 'trivia-main';
import Question from '../../components/Question';
import Loading from '../../components/Loading';

import './trivia.scss';


function Trivia({ trivia, triviaQuestionAnswer, triviaFetchRequested }: TriviaProps) {
  const { questionId } = useParams();
  const history = useHistory();
  const { loading, questions, fetchNew } = trivia;
  const id: number = Number(questionId) || 0;

  if (loading){
    return (<Loading text="Loading Trivia ..."/>);
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
    return (<Loading text="Fetching Trivia ..."/>);
  }

  const selectedQuestion = trivia.questions[id];
  if (!selectedQuestion) {
    return (<Redirect to={'/'}/>);
  }
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

export default ConnectedTrivia(Trivia);
