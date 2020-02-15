import { actionTypes } from "../../actions/types";
import { UserState } from '../../types';
import { operate } from './utils';
import { UserAction } from '../../actions/user/types';

const initialState = {
    username: '',
    score: 0,
}

export const userReducer = (
  state: UserState = initialState,
  action: UserAction,
) => {
  switch(action.type) {
    case actionTypes.USER_USERNAME_SET:
      return {
        ...state,
        username: action.payload,
      }
    
    case actionTypes.USER_SCORE_SET:
      const { operation, points } = action.payload; 
      return {
        ...state,
        score: operate(state.score, operation, points),
      }
      
    default:
      return initialState;
  }
}
