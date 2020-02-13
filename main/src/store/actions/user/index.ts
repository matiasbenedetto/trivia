import { UserUsernameSet, UserScoreSet, ScoreOperator } from './types';
import { actionTypes } from "../types";


export function usernameSet(username: string): UserUsernameSet {
  return {
    type: actionTypes.USER_USERNAME_SET,
    payload: username,
  };
}

export function scoreSet(operation: ScoreOperator, points: number): UserScoreSet {
  return {
    type: actionTypes.USER_SCORE_SET,
    payload: { operation, points },
  };
}
