import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

import { API_KEY } from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'helper-8a110.firebaseapp.com',
  databaseURL:
    'https://helper-8a110-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'helper-8a110',
  storageBucket: 'helper-8a110.appspot.com',
  messagingSenderId: '380253246935',
  appId: '1:380253246935:web:7824581f9dc0e1bbdce792',
  measurementId: 'G-PRM20B20JD',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

export { app, auth };
