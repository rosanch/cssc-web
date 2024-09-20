import React, { useState } from 'react';
import '../styles/AIChat.css';

interface AIChatProps {
  onUserMessage: (message: string) => void; // Prop to handle the message
  messages: { type: 'ai' | 'user'; text: string }[]; // Prop to receive messages from App
}

const AIChat: React.FC<AIChatProps> = ({ onUserMessage, messages }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Pass the user input message to App for handling
    onUserMessage(input);

    // Clear the input field immediately after sending the message
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.type === 'ai' ? 'ai-message' : 'user-message'}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AIChat;
