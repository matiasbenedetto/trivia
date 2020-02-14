import { BaseAction, actionTypes } from "../../actions/types";
import { Trivia, TriviaSettings } from "../../../api/types";

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
  { type, payload }: BaseAction
): Trivia {
  switch(type) {

    case actionTypes.TRIVIA_FETCH_REQUESTED:
      return {
        ...trivia,
        loading: true,
      }
    
    case actionTypes.TRIVIA_FETCH_SUCCEEDED:
      return {
        ...trivia,
        ...payload.settings,
        questions: [ ...payload.questions ],
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