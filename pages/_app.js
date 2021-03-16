import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap css

import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

function MyApp({ Component, pageProps }) {
  const firebaseConfig =  {
    apiKey: "AIzaSyDjz6pSIvJrmVLHPTAZYbKwkkIWCORT1B8",
    authDomain: "dailycard-9b80c.firebaseapp.com",
    projectId: "dailycard-9b80c",
    storageBucket: "dailycard-9b80c.appspot.com",
    messagingSenderId: "169857582519",
    appId: "1:169857582519:web:d8ced4ccb7694939415432",
    measurementId: "G-33JN19W75W"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  return <Component {...pageProps} />
}

export default MyApp
