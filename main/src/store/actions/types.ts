export enum actionTypes {
  // Trivia
  TRIVIA_FETCH_REQUESTED = 'TRIVIA_FETCH_REQUESTED',
  TRIVIA_FETCH_SUCCEEDED = 'TRIVIA_FETCH_SUCCEEDED',
  TRIVIA_FETCH_FAILED = 'TRIVIA_FETCH_FAILED',
  // User
  USER_USERNAME_SET = 'USER_USERNAME_SET',
  USER_SCORE_SET = 'USER_SCORE_SET'
}

export interface BaseAction {
  type: actionTypes;
  payload: any;
}
