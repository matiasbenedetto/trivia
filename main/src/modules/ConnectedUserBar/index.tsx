import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store/types';

export interface UserBarProps {
    username: string;
    score: number;
}

function mapStateToProps({ user: { username, score } }: AppState) {
    return {
        username,
        score,
    };
}

export default (UserBarComponent: React.FunctionComponent<UserBarProps>) => connect(mapStateToProps)(UserBarComponent);
