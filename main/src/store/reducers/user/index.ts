import { actionTypes } from '../../actions/types';
import { UserState } from '../../types';
import { operate } from './utils';
import { UserAction } from '../../actions/user/types';

const initialState = {
    username: '',
    score: 0,
};

export const userReducer = (user: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case actionTypes.USER_USERNAME_SET:
            return {
                ...user,
                username: action.payload,
            };

        case actionTypes.USER_SCORE_SET:
            const { operation, points } = action.payload;
            return {
                ...user,
                score: operate(user.score, operation, points),
            };

        default:
            return user;
    }
};
