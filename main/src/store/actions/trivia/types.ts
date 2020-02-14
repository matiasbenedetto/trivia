import { TriviaSettings, TriviaQuestion } from '../../../api/types';
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

export type TriviaActions = TriviaFetchRequested | TriviaFetchFailed | TriviaFetchSucceeded;