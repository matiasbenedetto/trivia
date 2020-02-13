import { Trivia } from '../api/types';

export interface UserState {
  username: string;
  score: number;
}

export interface AppState {
  user:  UserState;
  trivia: Trivia;
}