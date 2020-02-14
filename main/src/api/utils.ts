import { getTriviaApiResponse, TriviaQuestion, TriviaQuestionApiResponse } from "./types";


export function normalizeQuestions (apiResponse: getTriviaApiResponse): TriviaQuestion[] {
  return apiResponse.results.map((item: TriviaQuestionApiResponse) => (
    {
      category: item.category,
      type: item.type,
      difficulty: item.difficulty,
      question: item.question,
      correctAswer: item.correct_aswer,
      incorrectAnswers: item.incorrect_answers
    }
  ))
}