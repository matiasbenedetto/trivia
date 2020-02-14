import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store/types';
import { triviaFetchRequested } from '../../store/actions/trivia';
import { BaseAction } from '../../store/actions/types';
import { TriviaSettings } from '../../api/types';

export interface NewTriviaButtonProps {
  text: string,
  loading: boolean,
  settings?: TriviaSettings,
  triviaFetchRequested: (settings: TriviaSettings) => void,
}

function mapStateToProps({ trivia: { loading } }: AppState) {
  return {
    loading,
  };
}

function mapDispatchToProps (dispatch: Dispatch<BaseAction>) {
  return {
    triviaFetchRequested: (settings: TriviaSettings) => dispatch( triviaFetchRequested(settings) ),
  }
}

export default (NewTriviaButtonComponent: React.FunctionComponent<NewTriviaButtonProps>) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTriviaButtonComponent);
