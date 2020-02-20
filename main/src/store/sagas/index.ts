import { put, takeLatest } from 'redux-saga/effects';

import { triviaFetchSucceeded, triviaFetchFailed } from '../actions/trivia';
import { actionTypes } from '../actions/types';
import apiClient from '../../api';
import { TriviaFetchRequested } from '../actions/trivia/types';

function* triviaFetch(action: TriviaFetchRequested) {
    const { payload: settings } = action;
    try {
        const questions = yield apiClient.getTrivia(settings);
        yield put(triviaFetchSucceeded(settings, questions));
    } catch (error) {
        yield put(triviaFetchFailed(error));
    }
}

function* triviaSaga() {
    yield takeLatest(actionTypes.TRIVIA_FETCH_REQUESTED, triviaFetch);
}

export default triviaSaga;
