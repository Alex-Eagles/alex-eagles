// src/components/ScenePage/TransitionOverlay.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/transition.css';

const TransitionOverlay = ({ isTransitioning }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only show on mobile and when transitioning
  if (!isMobile) return null;
  
  return (
    <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}>
      <div className="transition-spinner"></div>
    </div>
  );
};

export default TransitionOverlay;