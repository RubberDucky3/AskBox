// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDINwYTmFHXAT7MEJXkld82DswmYhxoqVc",
    authDomain: "askbox-453b5.firebaseapp.com",
    projectId: "askbox-453b5",
    storageBucket: "askbox-453b5.firebasestorage.app",
    messagingSenderId: "740756920728",
    appId: "1:740756920728:web:4c5086af185fbb55e4b3ed",
    measurementId: "G-ZCSRC21LJ4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database service
const database = firebase.database();