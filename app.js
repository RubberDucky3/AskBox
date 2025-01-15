// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, update } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDINwYTmFHXAT7MEJXkld82DswmYhxoqVc",
    authDomain: "askbox-453b5.firebaseapp.com",
    databaseURL: "https://askbox-453b5-default-rtdb.firebaseio.com",
    projectId: "askbox-453b5",
    storageBucket: "askbox-453b5.appspot.com",
    messagingSenderId: "740756920728",
    appId: "1:740756920728:web:4c5086af185fbb55e4b3ed",
    measurementId: "G-ZCSRC21LJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add a request
function addRequest(request) {
    console.log("Adding request:", request);
    const newRequestKey = push(ref(database, 'requests')).key;
    const updates = {};
    updates['/requests/' + newRequestKey] = request;
    return update(ref(database), updates)
        .then(() => console.log("Request added successfully"))
        .catch((error) => console.error("Error adding request:", error));
}

// Listen for new requests
onChildAdded(ref(database, 'requests'), (data) => {
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