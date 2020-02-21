import { BaseAction, actionTypes } from '../../actions/types';
import { Trivia } from '../../types';
import { TriviaAction } from '../../actions/trivia/types';

export const initialState = {
    loading: false,
    difficulty: '',
    type: '',
    questions: [],
    error: '',
};

export function triviaReducer(trivia: Trivia = initialState, action: TriviaAction): Trivia {
    switch (action.type) {
        case actionTypes.TRIVIA_FETCH_REQUESTED:
            return {
                ...trivia,
                loading: true,
            };

        case actionTypes.TRIVIA_FETCH_SUCCEEDED:
            const { settings, questions } = action.payload;
            return {
                ...trivia,
                ...settings,
                questions,
                loading: false,
            };

        case actionTypes.TRIVIA_FETCH_FAILED:
            return {
                ...trivia,
                loading: false,
                error: action.payload,
            };

        case actionTypes.TRIVIA_QUESTION_ANSWER:
            const { questionId, answer } = action.payload;
            const newQuestions = [...trivia.questions];
            newQuestions[questionId] = {
                ...newQuestions[questionId],
                userAnswer: answer,
            };
            return { ...trivia, questions: [...newQuestions] };

        default:
            return trivia;
    }
}
