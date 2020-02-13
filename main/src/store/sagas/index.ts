import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { triviaFetchRequested, triviaFetchSucceeded, triviaFetchFailed } from '../actions/trivia';
import { BaseAction, actionTypes } from "../actions/types";
import apiClient from '../../api'; 


function* triviaFetch(action: BaseAction) {
   try {
      const { data } = yield call(apiClient.getTrivia, 10, 'hard', 'boolean');
      yield put(triviaFetchRequested(data));
   } catch (error) {
      yield put(triviaFetchFailed(error));
   }
}

function* triviaSaga() {
  yield takeLatest(actionTypes.TRIVIA_FETCH_REQUESTED, triviaFetch);
}

export default triviaSaga;