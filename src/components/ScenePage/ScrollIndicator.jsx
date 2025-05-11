import React, { useEffect, useState } from 'react';
import '../../styles/scrollindicator.css';

const ScrollIndicator = ({ scrollEnabled }) => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size and update on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide indicator when user starts scrolling
 

 // Don't show if scrolling is disabled or on mobile devices
  if (!scrollEnabled || isMobile) return null;
  return (
    <div className={`scroll-indicator ${visible ? 'visible' : 'hidden'} ${isMobile ? 'mobile' : ''}`}>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span>{isMobile ? '' : 'Scroll down or click on the vehicle components to explore'}</span>
    </div>
  );
};

export default ScrollIndicator;