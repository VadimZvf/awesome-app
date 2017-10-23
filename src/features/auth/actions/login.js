import { browserHistory } from 'react-router';
import api from '../../../services/api';

export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_FAIL = 'AUTH/LOGIN_FAIL';

export default function ({ username, password }, redirect) {
    return async dispatch => {
        try {
            const response = await api.auth().signInWithEmailAndPassword(username, password);
            console.log(response);
            dispatch({
                type: LOGIN,
                payload: { username, password }
            });
            browserHistory.push(redirect);
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: { username, password }
            });
        }
    };
}
