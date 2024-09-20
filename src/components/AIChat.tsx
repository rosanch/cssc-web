import React, { useState } from 'react';
import '../styles/AIChat.css';

interface AIChatProps {
  onUserMessage: (message: string) => void; // Prop to handle the message
}

const AIChat: React.FC<AIChatProps> = ({ onUserMessage }) => {
  const [messages, setMessages] = useState<{ type: 'ai' | 'user'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, { type: 'user', text: input }]);

    // Pass the message to the parent component to check for key phrases
    onUserMessage(input);

    // Simulate AI response
    const aiResponse = "AI is processing your request...";
    setMessages((prevMessages) => [...prevMessages, { type: 'ai', text: aiResponse }]);

    // Clear input
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
