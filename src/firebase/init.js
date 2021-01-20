import firebase from 'firebase';
import firestore from 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNQVTV4XBoHSWIGofAhA5BoGOn08Rfr0c",
    authDomain: "udemy-ninja-chat-f2280.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-f2280.firebaseio.com",
    projectId: "udemy-ninja-chat-f2280",
    storageBucket: "udemy-ninja-chat-f2280.appspot.com",
    messagingSenderId: "283795434221",
    appId: "1:283795434221:web:ad8fa2816942464e03fae4"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true });
  firebaseApp.firestore().settings({});
  export default firebaseApp.firestore();