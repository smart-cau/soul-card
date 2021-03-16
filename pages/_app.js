import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap css

import firebase from 'firebase/app';

import 'firebase/analytics';

function MyApp({ Component, pageProps }) {
  const firebaseConfig =  {
    apiKey: "AIzaSyAvgxNLPED6xAvGM7VWxSKJiXjDur5D-JI",
    authDomain: "the-soul-card-01.firebaseapp.com",
    projectId: "the-soul-card-01",
    storageBucket: "the-soul-card-01.appspot.com",
    messagingSenderId: "804759518636",
    appId: "1:804759518636:web:9e71818430a40c121f8e09",
    measurementId: "G-Q74PEMNM58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return <Component {...pageProps} />
}

export default MyApp
