import { getAnalytics, isSupported } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: 'AIzaSyD7L8snXRZRuL376a3twd1Ezr_NLSGhJSg',
  authDomain: 'workouttrackmarketing.firebaseapp.com',
  projectId: 'workouttrackmarketing',
  storageBucket: 'workouttrackmarketing.appspot.com',
  messagingSenderId: '875131768427',
  appId: '1:875131768427:web:a3d3c6dd5daa7983c9ab2e',
  measurementId: 'G-6Y0BKEDD3H',
};

export const logEvent = (eventName) => {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics().logEvent(eventName);
    }
  });
};
