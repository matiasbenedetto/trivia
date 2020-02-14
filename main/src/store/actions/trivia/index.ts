import { TriviaFetchRequested, TriviaFetchSucceeded, TriviaFetchFailed } from './types';
import { actionTypes } from "../types";
import { TriviaSettings, TriviaQuestion } from '../../../api/types';


export function triviaFetchRequested (settings: TriviaSettings): TriviaFetchRequested {
  return {
    type: actionTypes.TRIVIA_FETCH_REQUESTED,
    payload: settings,
  }
}

export function triviaFetchSucceeded (settings: TriviaSettings, questions: TriviaQuestion[]): TriviaFetchSucceeded {
  return {
    type: actionTypes.TRIVIA_FETCH_SUCCEEDED,
    payload: {
      settings,
      questions,
    },
  }
} 

export function triviaFetchFailed (error: string): TriviaFetchFailed {
  return {
    type: actionTypes.TRIVIA_FETCH_FAILED,
    payload: error,
  }
}

