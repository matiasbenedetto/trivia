import { TriviaType, TriviaDifficulty } from "../store/types";

export interface TriviaQuestionApiResponse {
  category: string;
  type: TriviaType;
  difficulty: TriviaDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface getTriviaApiResponse {
  response_code: number;
  results: TriviaQuestionApiResponse[];
}