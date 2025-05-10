import React from 'react';
import "../../styles/info.css";
import Typewriter from "typewriter-effect";
function Info({ setScrollEnabled, onClose, name, description, image }) {
     
    // Function to handle the back button click
    const handleBackClick = () => {
        setScrollEnabled(true); // Enable scrolling again
        if (onClose) onClose(); // Call parent's onClose function
    };
  return (
    <div className="canopy-panel">
      {/* Animated borders */}
      <div className="border-top"></div>
      <div className="border-right"></div>
      <div className="border-bottom"></div>
      <div className="border-left"></div>
      
      {/* Corners */}
      <div className="corner-top-left"></div>
      <div className="corner-bottom-right"></div>
      
     
      
      {/* Orange status box */}
      <div className="status-box">{ name }</div>
      
      {/* Content area */}
      <div className="image-area">
        <img 
          src={ image  } 
          alt={"System Diagram"} 
        />
      </div>
      
      <p className="description">
        { description }
      </p>
      
      <button className="restart-btn" onClick={handleBackClick}>⟵ Back</button>
    </div>
  );
}

export default Info;