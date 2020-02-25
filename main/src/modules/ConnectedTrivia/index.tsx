import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, TriviaSettings } from '../../store/types';
import { Trivia } from '../../store/types';
import { triviaQuestionAnswer, triviaFetchRequested } from '../../store/actions/trivia';
import { TriviaAction } from '../../store/actions/trivia/types';

export interface TriviaProps {
    trivia: Trivia;
    triviaQuestionAnswer: (questionId: number, answer: string) => void;
    triviaFetchRequested: (settings: TriviaSettings) => void;
}

function mapStateToProps({ trivia }: AppState) {
    return {
        trivia,
    };
}

function mapDispatchToProps(dispatch: Dispatch<TriviaAction>) {
    return {
        triviaQuestionAnswer: (questionId: number, answer: string) =>
            dispatch(triviaQuestionAnswer(questionId, answer)),
        triviaFetchRequested: (settings: TriviaSettings) => dispatch(triviaFetchRequested(settings)),
    };
}

export default (TriviaComponent: React.FunctionComponent<TriviaProps>) =>
    connect(mapStateToProps, mapDispatchToProps)(TriviaComponent);
