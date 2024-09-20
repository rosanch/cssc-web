import React, { useState } from 'react';
import AIChat from './components/AIChat';
import VisualLoader from './components/VisualLoader';
import './styles/App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [t1Credit, setT1Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [t2Credit, setT2Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [t3Credit, setT3Credit] = useState<boolean>(true); // Tracks matched key phrases

  // Function to handle user messages and detect key phrases
  const handleUserMessage = (message: string) => {
    const hasCredit = t1Credit || t2Credit || t3Credit;

    // Load images based on key phrases
    if (message.includes("what are dependencies") && hasCredit) {
      setSelectedImage("T1");
      setT1Credit(false);
    } else if (message.includes("images are impacted") && hasCredit) {
      setSelectedImage("T2");
      setT2Credit(false);
    } else if (message.includes("describe dependency") && hasCredit) {
      setSelectedImage("T3");
      setT3Credit(false);
    } else {
      // If all matches have been made, show the OOPS message, otherwise show empty
      if (!hasCredit) {
        setSelectedImage("OOPS");
      } else {
        setSelectedImage(null);
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
