import { BaseAction, actionTypes } from "../../actions/types";
import { UserState } from '../../types';
import { operate } from './utils';

const initialState = {
    username: '',
    score: 0,
}

export const userReducer = (
  state: UserState = initialState,
  { type, payload }: BaseAction
) => {
  switch(type) {
    case actionTypes.USER_USERNAME_SET:
      return {
        ...state,
        username: payload,
      }
    
    case actionTypes.USER_SCORE_SET:
      return {
        ...state,
        score: operate(state.score, payload.operator, payload.points),
      }
      
    default:
      return initialState;
  }
}
