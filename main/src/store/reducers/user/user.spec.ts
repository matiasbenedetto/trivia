import userReducer, { initialState } from './index';
import { actionTypes } from '../../actions/types';
import { UserUsernameSet, UserScoreSet } from '../../actions/user/types';

/* mocks */
const mockUserUsernameSetAction: UserUsernameSet = {
    type: actionTypes.USER_USERNAME_SET,
    payload: 'John Doe',
};

const mockUserScoreSetAction: UserScoreSet = {
    type: actionTypes.USER_SCORE_SET,
    payload: {
        operation: '+',
        points: 10,
    },
};

/* tests */
describe('user reducer', () => {
    it('should add the username', () => {
        const state = userReducer(initialState, mockUserUsernameSetAction);
        expect(state.username).toBe(mockUserUsernameSetAction.payload);
    });

    it('update the score', () => {
        const state = userReducer(initialState, mockUserScoreSetAction);
        const expectedScore = initialState.score + mockUserScoreSetAction.payload.points;
        expect(state.score).toBe(expectedScore);
    });
});
