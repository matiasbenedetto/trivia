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
  text: string;
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

export interface UserState {
  username: string;
  score: number;
}

export interface AppState {
  user:  UserState;
  trivia: Trivia;
}