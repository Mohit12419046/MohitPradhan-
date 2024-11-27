// Function to add messages to the chat box
function addMessage(message, isUser = true) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    if (isUser) {
      messageElement.classList.add('user-message');
      messageElement.textContent = 'You: ' + message;
    } else {
      messageElement.classList.add('bot-message');
      messageElement.textContent = 'Bot: ' + message;
    }
  
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the bottom
  }
  
  // Function to send message to the backend
  async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim()) {
      addMessage(userInput); // Add user message to chat box
      document.getElementById('user-input').value = ''; // Clear input field
  
      try {
        const response = await fetch('/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userInput }),
        });
  
        const data = await response.json();
        if (data && data.reply) {
          addMessage(data.reply, false); // Add bot response to chat box
        }
      } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, something went wrong. Please try again later.', false);
      }
    }
  }
  
  // Optional: Send message when "Enter" is pressed
  document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  