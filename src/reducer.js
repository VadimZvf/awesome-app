import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import walletReducer from 'chunk-wallet/lib/reducer';
import auth from './features/auth/reducer';

export default combineReducers({
    routing: routerReducer,
    auth,
    ...walletReducer('wallet')
});
