export type TriviaDifficulty = 'easy' | 'medium' | 'hard';

export type TriviaType = 'boolean' | 'multiple'; 

export interface TriviaSettings {
  amount: number;
  difficulty: TriviaDifficulty;
  type: TriviaType;
}

export interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAswer: string;
  incorrectAnswers: string[];
  userAnswer?: string;
}

export interface Trivia {
  loading: boolean;
  difficulty: string;
  type: string;
  questions: TriviaQuestion[];
  questionsCount: number;
  questionsAnswered: number;
}

export interface TriviaQuestionApiResponse {
  category: string;
  type: TriviaType;
  difficulty: TriviaDifficulty;
  question: string;
  correct_aswer: string;
  incorrect_answers: string[];
}

export interface getTriviaApiResponse {
  response_code: number;
  results: TriviaQuestionApiResponse[];
}