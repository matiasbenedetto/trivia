import { TriviaFetchRequested, TriviaFetchSucceeded, TriviaFetchFailed } from './types';
import { actionTypes } from "../types";
import { TriviaSettings, getTriviaApiResponse } from '../../../api/types';


export function triviaFetchSucceeded (settings: TriviaSettings): TriviaFetchRequested {
  return {
    type: actionTypes.TRIVIA_FETCH_REQUESTED,
    payload: settings,
  }
}

export function triviaFetchRequested (data: getTriviaApiResponse): TriviaFetchSucceeded {
  return {
    type: actionTypes.TRIVIA_FETCH_SUCCEEDED,
    payload: data,
  }
} 

export function triviaFetchFailed (error: string): TriviaFetchFailed {
  return {
    type: actionTypes.TRIVIA_FETCH_FAILED,
    payload: error,
  }
}

