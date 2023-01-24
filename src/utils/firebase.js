// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7L8snXRZRuL376a3twd1Ezr_NLSGhJSg',
  authDomain: 'workouttrackmarketing.firebaseapp.com',
  projectId: 'workouttrackmarketing',
  storageBucket: 'workouttrackmarketing.appspot.com',
  messagingSenderId: '875131768427',
  appId: '1:875131768427:web:a3d3c6dd5daa7983c9ab2e',
  measurementId: 'G-6Y0BKEDD3H',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const analytics = firebase.analytics;
