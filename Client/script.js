console.log("JavaScript file is loaded");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('request-form');
    const requestList = document.getElementById('request-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('request-title').value;
        const content = document.getElementById('request-content').value;

        if (title && content) {
            const requestItem = document.createElement('div');
            requestItem.className = 'request-item';
            requestItem.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;

            requestList.appendChild(requestItem);

            form.reset();
        }
    });
});
