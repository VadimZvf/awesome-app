import { combineReducers } from 'redux';
import walletReducer from 'chunk-wallet/lib/reducer';
import { INIT } from './actions/init';
import { createReducer, nextState } from '../utilities';

const initialState = {
    isPending: false,
    isReady: false
};

export const actions = {
    [INIT]: state => nextState(state, { isReady: true })
};

const reducer = createReducer(initialState, actions);

export default combineReducers({
    app: reducer,
    ...walletReducer
});
