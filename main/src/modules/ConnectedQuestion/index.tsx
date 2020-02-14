import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store/types';
import { triviaFetchRequested } from '../../store/actions/trivia';
import { BaseAction } from '../../store/actions/types';
import { TriviaSettings, TriviaQuestion } from "../../store/types";

export interface ConnectedQuestionProps {
  question: TriviaQuestion,
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

export default (QuestionComponent: React.FunctionComponent<ConnectedQuestionProps>) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionComponent);
