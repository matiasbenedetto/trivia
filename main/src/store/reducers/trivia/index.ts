import { BaseAction, actionTypes } from '../../actions/types';
import { Trivia } from '../../types';
import { TriviaAction } from '../../actions/trivia/types';

export const initialState = {
    loading: false,
    difficulty: '',
    type: '',
    questions: [],
    error: '',
    fetchNew: true,
};

export default function triviaReducer(trivia: Trivia = initialState, action: TriviaAction): Trivia {
    switch (action.type) {
        case actionTypes.TRIVIA_FETCH_REQUESTED:
            return {
                ...trivia,
                loading: true,
                fetchNew: false,
            };

        case actionTypes.TRIVIA_FETCH_SUCCEEDED:
            const { settings, questions } = action.payload;
            return {
                ...trivia,
                ...settings,
                questions: [...questions],
                loading: false,
                fetchNew: false,
            };

        case actionTypes.TRIVIA_FETCH_FAILED:
            return {
                ...trivia,
                loading: false,
                error: action.payload,
                fetchNew: false,
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
