// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWhL-vj_UEyk2mAxrhTmQcM2c596rPY_M',
  authDomain: 'helper-8a110.firebaseapp.com',
  databaseURL:
    'https://helper-8a110-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'helper-8a110',
  storageBucket: 'helper-8a110.appspot.com',
  messagingSenderId: '380253246935',
  appId: '1:380253246935:web:7824581f9dc0e1bbdce792',
  measurementId: 'G-PRM20B20JD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
