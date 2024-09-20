import React, { useState } from 'react';
import AIChat from './components/AIChat';
import VisualLoader from './components/VisualLoader';
import './styles/app.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [q1Credit, setQ1Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [q2Credit, setQ2Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [q3Credit, setQ3Credit] = useState<boolean>(true); // Tracks matched key phrases

  // Function to handle user messages and detect key phrases
  const handleUserMessage = (message: string) => {
    const hasCredit = q1Credit || q2Credit || q3Credit;
    // Load images based on key phrases
    if (message.includes("what are dependencies") && hasCredit) {
      setSelectedImage("Q1");
      setQ1Credit(false);
    } else if (message.includes("images are impacted") && hasCredit) {
      setSelectedImage("Q2");
      setQ2Credit(false);
    } else if (message.includes("describe dependency") && hasCredit) {
      setSelectedImage("Q3");
      setQ3Credit(false);
    } else {
      // If all matches have been made, show the OOPS message, otherwise show empty
      if (hasCredit) {
        setSelectedImage(null);
      } else {
        setSelectedImage("OOPS");
      }
    }
  };

  return (
    <div className="app-container">
      {/* Left Side: Visualizer */}
      <div className="visualizer-container">
        <VisualLoader selectedImage={selectedImage} />
      </div>

      {/* Right Side: Chat */}
      <div className="chat-container">
        <AIChat onUserMessage={handleUserMessage} />
      </div>
    </div>
  );
}

export default App;
