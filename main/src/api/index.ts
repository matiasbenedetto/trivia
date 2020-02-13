import axios, { AxiosInstance } from 'axios';

import { TriviaDifficulty, TriviaType, TriviaQuestionApiResponse, getTriviaApiResponse } from './types';

class Api {
  private client: AxiosInstance;
  
  constructor(){
      this.client = axios.create({
          baseURL: 'https://opentdb.com/api.php',
          timeout: 5000
      });
  }

  async getTrivia(amount: number, difficulty: TriviaDifficulty, type: TriviaType) {
      return this.client.get(`?amount=${amount}&difficulty=${difficulty}&type=${type}`);
  }
}

const apiClient = new Api();
Object.freeze(apiClient);
export default apiClient;