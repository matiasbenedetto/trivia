import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, TriviaSettings, UserState } from '../../store/types';
import { Trivia } from '../../store/types';
import { scoreSet } from '../../store/actions/user';
import { UserScoreSet, ScoreOperator } from '../../store/actions/user/types';

export interface TriviaResultsProps {
    trivia: Trivia;
    scoreSet: (operation: ScoreOperator, points: number) => void;
}

function mapStateToProps({ trivia, user }: AppState) {
    return {
        trivia,
    };
}

function mapDispatchToProps(dispatch: Dispatch<UserScoreSet>) {
    return {
        scoreSet: (operation: ScoreOperator, points: number) => dispatch(scoreSet(operation, points)),
    };
}

export default (TriviaResultsComponent: React.FunctionComponent<TriviaResultsProps>) =>
    connect(mapStateToProps, mapDispatchToProps)(TriviaResultsComponent);
