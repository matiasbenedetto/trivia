import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { triviaFetchRequested, triviaFetchSucceeded, triviaFetchFailed } from '../actions/trivia';
import { BaseAction, actionTypes } from "../actions/types";
import apiClient from '../../api'; 


function* triviaFetch(action: BaseAction) {
   const { payload: settings } = action;
   try {
      const { data : { results: questions } } = yield call(apiClient.getTrivia, settings);
      yield put(triviaFetchSucceeded(settings, questions));
   } catch (error) {
      console.log(error);
      yield put(triviaFetchFailed(error));
   }
}

function* triviaSaga() {
  yield takeLatest(actionTypes.TRIVIA_FETCH_REQUESTED, triviaFetch);
}

export default triviaSaga;