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

// Function to add a request
function addRequest(request) {
    const newRequestKey = database.ref().child('requests').push().key;
    const updates = {};
    updates['/requests/' + newRequestKey] = request;
    return database.ref().update(updates);
}

// Listen for new requests
database.ref('requests').on('child_added', (data) => {
    const request = data.val();
    displayRequest(request);
});

// Function to display a request
function displayRequest(request) {
    const requestList = document.getElementById('request-list');
    const requestItem = document.createElement('li');
    requestItem.textContent = request;
    requestList.appendChild(requestItem);
}

// Handle form submission
document.getElementById('request-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const requestInput = document.getElementById('request-input');
    const request = requestInput.value;
    addRequest(request);
    requestInput.value = '';
});