import { combineReducers } from 'redux';
import triviaReducer from './trivia/index';
import userReducer from './user/index';

const rootReducer = combineReducers({
    user: userReducer,
    trivia: triviaReducer,
});

export default rootReducer;
