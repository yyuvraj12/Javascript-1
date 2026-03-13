const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const emptyMsg = document.getElementById('emptyMsg');
const clearAllBtn = document.getElementById('clearAllBtn');


eventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const category = document.getElementById('eventCategory').value;
    const desc = document.getElementById('eventDesc').value;

    createEventCard(title, date, category, desc);
    eventForm.reset();
});

function createEventCard(title, date, category, desc) {
    if (emptyMsg) emptyMsg.style.display = 'none';

    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <span class="delete-btn">✖</span>
        <h3>${title}</h3>
        <p><strong>📅 Date:</strong> ${date}</p>
        <p><strong>🏷️ Category:</strong> ${category}</p>
        <p>${desc}</p>
    `;

    eventList.appendChild(card);
}

eventList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const cardToRemove = e.target.parentElement;
        cardToRemove.remove();

        
        if (eventList.children.length === 0) {
            emptyMsg.style.display = 'block';
        }
    }
});


clearAllBtn.addEventListener('click', () => {
    eventList.innerHTML = '';
    eventList.appendChild(emptyMsg);
    emptyMsg.style.display = 'block';
});


document.getElementById('runDemoBtn').addEventListener('click', () => {
    const demoEl = document.getElementById('demoContent');
    
    
    document.getElementById('htmlResult').innerHTML = `<strong>innerHTML:</strong> ${demoEl.innerHTML}`;
    
    
    document.getElementById('textResult').innerText = `innerText: ${demoEl.innerText}`;
    
    
    document.getElementById('contentResult').textContent = `textContent: ${demoEl.textContent}`;
});