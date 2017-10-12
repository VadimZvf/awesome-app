import { LOGIN } from './actions/login';
import { createReducer, nextState } from '../../utilities';

const defaultUser = { isAuthenticated: false, username: '', role: '' };
const initialState = { ...defaultUser, isPending: false, error: '' };

export const actions = {
    [LOGIN]: (state, { payload }) => nextState(state, { isPending: false, isAuthenticated: true, ...payload })
};

export default createReducer(initialState, actions);
