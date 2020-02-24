import triviaReducer, { initialState } from './index';
import { actionTypes } from '../../actions/types';
import {
    TriviaFetchFailed,
    TriviaFetchRequested,
    TriviaFetchSucceeded,
    TriviaQuestionAnswer,
} from '../../actions/trivia/types';
import { TRIVIA_DEFAULT_SETTINGS } from '../../../constants';
import { TriviaQuestion, Trivia } from '../../types';

/* mocks */
const mockTriviaQuestions: TriviaQuestion[] = [
    {
        category: 'mockCategory',
        type: 'boolean',
        difficulty: 'hard',
        text: 'mockQuestionText',
        correctAswer: 'True',
        incorrectAnswers: ['False'],
    },
    {
        category: 'mockCategory',
        type: 'boolean',
        difficulty: 'hard',
        text: 'mockQuestionText',
        correctAswer: 'True',
        incorrectAnswers: ['False'],
    },
];

const mockStateWithQuestions: Trivia = {
    ...TRIVIA_DEFAULT_SETTINGS,
    questions: mockTriviaQuestions,
    loading: false,
    error: '',
    fetchNew: false,
};

const mockTriviaFetchSucceededAction: TriviaFetchSucceeded = {
    type: actionTypes.TRIVIA_FETCH_SUCCEEDED,
    payload: {
        settings: TRIVIA_DEFAULT_SETTINGS,
        questions: mockTriviaQuestions,
    },
};

const mockTriviaFetchRequestedAction: TriviaFetchRequested = {
    type: actionTypes.TRIVIA_FETCH_REQUESTED,
    payload: {
        ...TRIVIA_DEFAULT_SETTINGS,
    },
};

const mockTriviaFetchFailedAction: TriviaFetchFailed = {
    type: actionTypes.TRIVIA_FETCH_FAILED,
    payload: 'error',
};

const mockTriviaQuestionAnswerAction: TriviaQuestionAnswer = {
    type: actionTypes.TRIVIA_QUESTION_ANSWER,
    payload: {
        questionId: 1,
        answer: 'False',
    },
};

/* tests */
describe('trivia reducer', () => {
    it('should add the settings and questions to the state', () => {
        const state = triviaReducer(initialState, mockTriviaFetchSucceededAction);
        expect(state).toMatchObject({
            ...initialState,
            ...TRIVIA_DEFAULT_SETTINGS,
            questions: mockTriviaQuestions,
            loading: false,
        });
    });

    it('should add loading to state', () => {
        const state = triviaReducer(initialState, mockTriviaFetchRequestedAction);
        expect(state).toMatchObject({
            ...initialState,
            loading: true,
        });
    });

    it('should add error to state', () => {
        const state = triviaReducer(initialState, mockTriviaFetchFailedAction);
        expect(state).toMatchObject({
            ...initialState,
            error: mockTriviaFetchFailedAction.payload,
        });
    });

    it('should update the question answer', () => {
        const state = triviaReducer(mockStateWithQuestions, mockTriviaQuestionAnswerAction);
        const { questionId, answer } = mockTriviaQuestionAnswerAction.payload;
        expect(state.questions[questionId].userAnswer).toBe(answer);
    });
});
