// src/components/ScrollIndicator.js
import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';

// This component shows a scrolling indicator in a 3D scene
const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);
  
  // Auto-hide after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!visible) return null;
  
  return (
    <Html
      position={[0, -1, 0]}
      center
      style={{
        pointerEvents: 'none',
        transform: 'translateY(40vh)'
      }}
    >
      <div
        style={{
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeInOut 2s infinite'
        }}
      >
        <p style={{ margin: '0 0 5px 0' }}>Scroll to explore</p>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            transform="rotate(90 12 12)"
          />
        </svg>
        <style>
          {`
            @keyframes fadeInOut {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
          `}
        </style>
      </div>
    </Html>
  );
};

export default ScrollIndicator;