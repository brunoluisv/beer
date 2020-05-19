import * as firebase from 'firebase';
import '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCXR7Ff0iOFFw4wso3jthmDZGJk_CESBmI",
  authDomain: "beer-d76a0.firebaseapp.com",
  databaseURL: "https://beer-d76a0.firebaseio.com",
  projectId: "beer-d76a0",
  storageBucket: "beer-d76a0.appspot.com",
  messagingSenderId: "1087031338274",
  appId: "1:1087031338274:web:85d63322c414b2687bb17b",
  measurementId: "G-YC8QPBY732"
};

firebase.initializeApp(firebaseConfig);

export default firebase;