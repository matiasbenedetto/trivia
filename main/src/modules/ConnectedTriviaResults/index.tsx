import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import getScoreMessage, { ScoreMessage } from './utils';
import { AppState, TriviaSettings } from '../../store/types';
import { Trivia } from '../../store/types';
import { scoreSet } from '../../store/actions/user';
import { ScoreOperator } from '../../store/actions/user/types';
import { triviaFetchRequested } from '../../store/actions/trivia';
import { BaseAction } from '../../store/actions/types';

export interface TriviaResultsProps {
    trivia: Trivia;
    scoreSet: (operation: ScoreOperator, points: number) => void;
    triviaFetchRequested: (settings: TriviaSettings) => void;
    getScoreMessage: (score: number) => ScoreMessage;
}

function mapStateToProps({ trivia, user }: AppState) {
    return {
        trivia,
    };
}

function mapDispatchToProps(dispatch: Dispatch<BaseAction>) {
    return {
        scoreSet: (operation: ScoreOperator, points: number) => dispatch(scoreSet(operation, points)),
        triviaFetchRequested: (settings: TriviaSettings) => dispatch(triviaFetchRequested(settings)),
        getScoreMessage,
    };
}

export default (TriviaResultsComponent: React.FunctionComponent<TriviaResultsProps>) =>
    connect(mapStateToProps, mapDispatchToProps)(TriviaResultsComponent);
