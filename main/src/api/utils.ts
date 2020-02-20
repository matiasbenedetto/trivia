import he from 'he';

import { GetTriviaApiResponse, TriviaQuestionApiResponse } from './types';
import { TriviaQuestion } from '../store/types';

export function normalizeQuestions(apiResponse: GetTriviaApiResponse): TriviaQuestion[] {
    return apiResponse.results.map((item: TriviaQuestionApiResponse) => ({
        category: item.category,
        type: item.type,
        difficulty: item.difficulty,
        text: he.decode(item.question),
        correctAswer: item.correct_answer,
        incorrectAnswers: item.incorrect_answers,
    }));
}
