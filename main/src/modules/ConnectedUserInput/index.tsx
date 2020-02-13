import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store/types';
import { usernameSet } from '../../store/actions/user';
import { BaseAction } from '../../store/actions/types';

export interface UserInputProps {
  username: string,
  setUsername: (name: string) => void,
}

function mapStateToProps({ user: { username } }: AppState) {
  return {
    username,
  };
}

function mapDispatchToProps (dispatch: Dispatch<BaseAction>) {
  return {
    setUsername: (name: string) => dispatch( usernameSet(name) ),
  }
}

export default (UserInputComponent: React.FunctionComponent<UserInputProps>) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInputComponent);
