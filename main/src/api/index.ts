import axios, { AxiosInstance } from 'axios';

import { TriviaSettings } from '../types';

class Api {
  private client: AxiosInstance;
  
  constructor(){
      this.client = axios.create({
          baseURL: 'https://opentdb.com/api.php?',
          timeout: 5000
      });
  }

  async getTrivia({ amount, difficulty, type } :TriviaSettings) {
    try{
      const movie = await this.client.get(`amount=${amount}&difficulty=${difficulty}&type=${type}`);
      return movie.data;
    }catch(error){
      return error;
    }
  }

  test(){
    console.log('Testing api client');
  }

  test2(){
    console.log('Another test to test the watch');
  }
}

const apiClient = new Api();
Object.freeze(apiClient);
export default apiClient;