export enum TriviaDifficulty {
  easy= 'easy',
  medium= 'medium',
  hard= 'hard',
}

export enum TriviaType {
  boolean= 'boolean',
  multiple= 'multiple',
}

export interface TriviaSettings {
  amount: number;
  difficulty: TriviaDifficulty;
  type: TriviaType;
}