import { browserHistory } from 'react-router';

export const LOGIN = 'AUTH/LOGIN';

export default function ({ username, password }, redirect) {
    browserHistory.push(redirect);

    return {
        type: LOGIN,
        payload: { username, password }
    };
}
