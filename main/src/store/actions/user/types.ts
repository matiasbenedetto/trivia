import { BaseAction, actionTypes } from "../types";

export type ScoreOperator = '*' | '/' | '-' | '+';

export interface ScoreOperation {
  operation: ScoreOperator;
  points: number;
}

export interface UserUsernameSet extends BaseAction {
  type: actionTypes.USER_USERNAME_SET;
  payload: string;
}

export interface UserScoreSet extends BaseAction {
  type: actionTypes.USER_SCORE_SET;
  payload: ScoreOperation;
}
