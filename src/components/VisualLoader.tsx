import React from 'react';
import '../styles/VisualLoader.css';

import Q1 from '../img/Q1.png';
import Q2 from '../img/Q2.png';
import Q3 from '../img/Q3.png';

interface VisualLoaderProps {
  selectedImage: string | null;
}

const VisualLoader: React.FC<VisualLoaderProps> = ({ selectedImage }) => {
  const renderContent = () => {
    if (selectedImage === "Q1") {
      return <img src={Q1} alt="Q1 Diagram" />;
    } else if (selectedImage === "Q2") {
      return <img src={Q2} alt="Q2 Diagram" />;
    } else if (selectedImage === "Q3") {
      return <img src={Q3} alt="Q3 Diagram" />;
    } else if (selectedImage === "OOPS") {
      return (
        <p>
          OOPS! Demo credits exceeded.<br />
          Please upgrade to premium for the full experience.
        </p>
      );
    } else {
      return <p></p>; // Default to empty string if no matches are made yet
    }
  };

  return (
    <div className="visualizer-content">
      {renderContent()}
    </div>
  );
};

export default VisualLoader;
