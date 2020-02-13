import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, UserState } from '../../store/types';
import { usernameSet } from '../../store/actions/user';
import { BaseAction } from '../../store/actions/types';


export interface HomeProps {
  user: UserState;
}

function mapStateToProps({ user }: AppState) {
  return {
    user,
  };
}

export default (HomeComponent: React.FunctionComponent<HomeProps>) => connect(mapStateToProps)(HomeComponent);
