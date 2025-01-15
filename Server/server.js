const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve your static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../Client')));

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // Broadcast to all connected clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

server.listen(8080, function listening() {
  console.log('Server started on port 8080');
});

console.log("JavaScript file is loaded");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('request-form');
    const requestList = document.getElementById('request-list');
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
        const { title, content } = JSON.parse(event.data);
        addRequestToList(title, content);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('request-title').value;
        const content = document.getElementById('request-content').value;

        if (title && content) {
            const request = { title, content };
            ws.send(JSON.stringify(request));
            addRequestToList(title, content);
            form.reset();
        }
    });

    function addRequestToList(title, content) {
        const requestItem = document.createElement('div');
        requestItem.className = 'request-item';
        requestItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        requestList.appendChild(requestItem);
    }
});
