 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkXcv1P_pN_mGdJgE6nfNsyMZ7sI0B_-Q",
    authDomain: "tvtracker-9fc3f.firebaseapp.com",
    databaseURL: "https://tvtracker-9fc3f.firebaseio.com",
    projectId: "tvtracker-9fc3f",
    storageBucket: "tvtracker-9fc3f.appspot.com",
    messagingSenderId: "312729741206",
    appId: "1:312729741206:web:6c04aa98c5641258495fb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()



  export default firebase;