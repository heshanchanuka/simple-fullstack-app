const form = document.getElementById('messageForm');
const messagesDiv = document.getElementById('messages');

const API_URL = 'https://your-backend-url.onrender.com/api/messages';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  });

  const data = await res.json();
  renderMessages();
  form.reset();
});

async function renderMessages() {
  const res = await fetch(API_URL);
  const messages = await res.json();
  messagesDiv.innerHTML = messages.map(msg => `
    <div class="bg-gray-700 p-3 rounded">
      <strong>${msg.name}</strong>: ${msg.message}
    </div>
  `).join('');
}

renderMessages();
