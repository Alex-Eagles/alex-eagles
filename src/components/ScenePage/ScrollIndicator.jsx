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
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't show if scrolling is disabled
  if (!scrollEnabled) return null;

  return (
    <div
      className={`scroll-indicator ${visible ? 'visible' : 'hidden'}${isMobile ? ' mobile-top' : ''}`}
    >
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <span>Scroll down</span>
    </div>
  );
};

export default ScrollIndicator;