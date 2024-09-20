import React, { useState } from 'react';
import AIChat from './components/AIChat';
import VisualLoader from './components/VisualLoader';
import './styles/App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [t1Credit, setT1Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [t2Credit, setT2Credit] = useState<boolean>(true); // Tracks matched key phrases
  const [t3Credit, setT3Credit] = useState<boolean>(true); // Tracks matched key phrases

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const t1 = "Musl is a lightweight, fast, simple, and secure C library that is used as the standard C library in Alpine Linux distribution. It is smaller and more secure than the more commonly used GNU C Library (glibc) and provides all the necessary functionality required by the C standard library.";
  const t2 = "The image impacted by CVE-2019-14697 is 'docker.io/library/alpine'."
  const t3 = "The dependencies of the alpine image are: apk-tools, scanelf, musl, ssl_client, alpine-baselayout, libressl2.6-libtls, busybox, libc-utils, alpine-keys, libressl2.6-libssl, zlib, musl-utils, and libressl2.6-libcrypto."
  

  // Function to handle user messages and detect key phrases with custom responses
  const handleUserMessage = async (message: string): Promise<string> => {
    const hasCredit = t1Credit || t2Credit || t3Credit;
    let aiResponse = "AI is processing your request...";

    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("what are the dependencies") && hasCredit) {
      await delay(7000);
      setSelectedImage("T1");
      setT1Credit(false);
      aiResponse = t1;
    } else if (lowerCaseMessage.includes("images are impacted") && hasCredit) {
      await delay(2000);
      setSelectedImage("T2");
      setT2Credit(false);
      aiResponse = t2;
    } else if (lowerCaseMessage.includes("describe dependency") && hasCredit) {
      await delay(5000);
      setSelectedImage("T3");
      setT3Credit(false);
      aiResponse = t3;
    } else {
      if (!hasCredit) {
        setSelectedImage("OOPS");
        aiResponse = "OOPS! Demo credits exceeded. Please upgrade to premium for the full experience.";
      } else {
        setSelectedImage(null);
        aiResponse = "I don't understand the request. No matches found for your query.";
      }
    }

    return aiResponse;
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
