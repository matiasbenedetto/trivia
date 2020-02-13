import { BaseAction, actionTypes } from "../../actions/types";
import { AppState } from '../../types';
import { Trivia } from "../../../api/types";

const initialState = {
  difficulty: '',
  type: '',
  questions: [],
  questionsCount: 0,
  questionsAnswered: 0,
};

export function triviaReducer (
  state: Trivia= initialState,
  { type, payload }: BaseAction
): Trivia {
  switch(type) {
    
    case actionTypes.TRIVIA_FETCH_SUCCEEDED:
      return {
        ...state,
        ...payload,
      }

    default:
      return state;
  }
}