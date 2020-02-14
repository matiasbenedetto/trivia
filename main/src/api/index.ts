import axios, { AxiosInstance } from 'axios';
import { TriviaQuestionApiResponse, getTriviaApiResponse } from './types';
import { TriviaDifficulty, TriviaType, TriviaSettings } from "../store/types";
import { normalizeQuestions } from './utils';

class Api {
  private client: AxiosInstance;
  
  constructor(){
      this.client = axios.create({
          baseURL: 'https://opentdb.com/api.php',
          timeout: 5000
      });
  }

  getTrivia = async ({amount, difficulty, type}: TriviaSettings) => {
      const { data } = await this.client.get(`?amount=${amount}&difficulty=${difficulty}&type=${type}`);
      return normalizeQuestions(data);
  }
}

const apiClient = new Api();
Object.freeze(apiClient);
export default apiClient;