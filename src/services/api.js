import firebase from 'firebase';
import config from '../config';

const api = firebase.initializeApp(config.firebase);

export default api;
