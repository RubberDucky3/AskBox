import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [request, setRequest] = useState('');
    const [requests, setRequests] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (request.trim()) {
            setRequests([...requests, request]);
            setRequest('');
        }
    };

    const handleComplete = (index) => {
        setRequests(requests.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <header className="text-center mt-4">
                <h1>AskBox</h1>
            </header>
            <main>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={request}
                                onChange={(e) => setRequest(e.target.value)}
                                placeholder="Enter your request"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Request</button>
                    </form>
                </section>
                <section>
                    <ul className="list-group">
                        {requests.map((req, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {req}
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleComplete(index)}
                                >
                                    Complete
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <footer className="text-center mt-4">
                <p>&copy; 2025 AskBox</p>
            </footer>
        </div>
    );
}

export default App;
