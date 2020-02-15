import { TriviaSettings, TriviaQuestion } from "../../types";
import { BaseAction, actionTypes } from '../types';


export interface TriviaFetchRequested extends BaseAction {
  type: actionTypes.TRIVIA_FETCH_REQUESTED;
  payload: TriviaSettings;
}

export interface TriviaFetchSucceeded extends BaseAction {
  type: actionTypes.TRIVIA_FETCH_SUCCEEDED;
  payload: {
    settings: TriviaSettings, 
    questions: TriviaQuestion[],
  }
}

export interface TriviaFetchFailed extends BaseAction {
  type: actionTypes.TRIVIA_FETCH_FAILED;
  payload: string;
}

export interface TriviaQuestionAnswer extends BaseAction {
  type: actionTypes.TRIVIA_QUESTION_ANSWER;
  payload: {
    questionId: number,
    answer: string,
  }
}

export type TriviaAction = TriviaFetchRequested | TriviaFetchFailed | TriviaFetchSucceeded | TriviaQuestionAnswer;