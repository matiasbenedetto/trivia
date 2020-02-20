import React, { ReactNode } from 'react';
import { connect } from 'react-redux';

import { AppState, UserState } from '../../store/types';

export interface HomeProps {
    user: UserState;
}

function mapStateToProps({ user }: AppState) {
    return {
        user,
    };
}

export default (HomeComponent: React.FunctionComponent<HomeProps>) => connect(mapStateToProps)(HomeComponent);
