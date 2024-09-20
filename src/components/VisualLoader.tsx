import React from 'react';
import T1 from '../img/T1.png';
import T2 from '../img/T2.png';
import T3 from '../img/T3.png';
import '../styles/VisualLoader.css';

interface VisualLoaderProps {
  selectedImage: string | null;
}

const VisualLoader: React.FC<VisualLoaderProps> = ({ selectedImage }) => {
  let content;

  // Determine what content to display based on the selectedImage prop
  if (selectedImage === "T1") {
    content = <img src={T1} alt="T1" className="visual-image" />;
  } else if (selectedImage === "T2") {
    content = <img src={T2} alt="T2" className="visual-image" />;
  } else if (selectedImage === "T3") {
    content = <img src={T3} alt="T3" className="visual-image" />;
  } else if (selectedImage === "OOPS") {
    content = (
      <div className="oops-message">
        OOPS! Demo credits exceeded. <br /> Please upgrade to premium for the full experience.
      </div>
    );
  } else {
    // When no image is selected and not in the "OOPS" state, show nothing
    content = null;
  }

  return (
    <div className="visual-loader">
      {content}
    </div>
  );
};

export default VisualLoader;
