import React, { useEffect, useRef } from "react";
import "../../styles/modal.css";

function Modal({ isOpen, onClose, title, videoPath = "/IMG_0534.MOV" }) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div 
            className="section video-section"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }}
          >
            <video 
              className="section-video" 
              src={videoPath}
              loop 
              muted
              preload="metadata"
            />
          </div>
          <div className="section">
            <img src="/drone.jpg" alt="" />
          </div>
          <div className="section"></div>
          <div className="section"></div>
          <div className="section"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;