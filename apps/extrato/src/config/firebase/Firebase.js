import { FirebaseAuthAPI } from '@monorepo-nx/services/api';
import * as firebase from 'firebase/app';

const config = {
  apiKey: process.env.NX_REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.NX_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NX_REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.NX_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NX_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NX_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NX_REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.NX_REACT_APP_FIREBASE_MEASUREMENT_ID,
};

if (firebase && firebase.apps && !firebase.apps.length) {
  firebase.initializeApp(config);

  FirebaseAuthAPI.postAutentication()
    .then(resp => {
      if (resp.data.access_token) {
        firebase.auth().signInWithCustomToken(resp.data.access_token);
      }
    })
    .catch(error => console.log(error));
}

export default firebase;
