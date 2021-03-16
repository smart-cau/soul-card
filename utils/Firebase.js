import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig =  {
  apiKey: "AIzaSyAvgxNLPED6xAvGM7VWxSKJiXjDur5D-JI",
  authDomain: "the-soul-card-01.firebaseapp.com",
  projectId: "the-soul-card-01",
  storageBucket: "the-soul-card-01.appspot.com",
  messagingSenderId: "804759518636",
  appId: "1:804759518636:web:9e71818430a40c121f8e09",
  measurementId: "G-Q74PEMNM58"
};

if(!firebase.apps.length) { // To confirm that the firebase is not already initialized before.
  // 위 if 문 없으면 "ERROR FirebaseError: Firebase: Firebase App named ‘[DEFAULT]’ already exists (app/duplicate-app)." 에러 occur
  firebase.initializeApp(firebaseConfig);
}

const analytics = firebase.analytics;

export {firebase, analytics};