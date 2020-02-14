import { BaseAction, actionTypes } from "../../actions/types";
import { Trivia } from "../../../api/types";
import { TriviaActions } from '../../actions/trivia/types';


const initialState = {
  loading: false,
  difficulty: '',
  type: '',
  questions: [],
  questionsCount: 0,
  questionsAnswered: 0,
};

export function triviaReducer (
  trivia: Trivia= initialState,
  action: TriviaActions
): Trivia {
  switch(action.type) {
    case actionTypes.TRIVIA_FETCH_REQUESTED:
      return {
        ...trivia,
        loading: true,
      }
    
    case actionTypes.TRIVIA_FETCH_SUCCEEDED:
      const { settings, questions } = action.payload;
      return {
        ...trivia,
        ...settings,
        questions,
        loading: false,
      }
    
    case actionTypes.TRIVIA_FETCH_FAILED:
      return {
        ...trivia,
        loading: false,
      }

    default:
      return trivia;
  }
}