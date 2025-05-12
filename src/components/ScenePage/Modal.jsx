// src/components/Modal.js
import React, { useEffect, useState, useRef } from "react";
import "../../styles/modal.css";
import { mediaItems as droneMediaItems } from "../../assets/data/droneMedia";
import { mediaItems as fixedMediaItems } from "../../assets/data/fixedwingMedia";
import {testDroneMediaItems as testMediaItems} from "../../assets/data/testDroneMediaItems";
import componentsData from "../../assets/data/componentsData";
import fixedcomponentsData from "../../assets/data/fixedwingComponentsData";
import testDroneComponentsData from "../../assets/data/testDroneComponentsData";

/**
 * Modal component: shows sections of media items.
 * If an item has a .media array, use it;
 * otherwise wrap its single src/image/video into media[].
 */
function Modal({ isOpen, onClose, title, componentsModal }) {
  const [expandedId, setExpandedId] = useState(null);
  const sectionRefs = useRef({});

  // Select dataset based on title & componentsModal
  let items = [];
  if (title === "Itay") {
    items = componentsModal ? componentsData : droneMediaItems;
  } else if (title === "Taco") {
    items = componentsModal ? fixedcomponentsData : fixedMediaItems;
  } else {
    items = componentsModal ? testDroneComponentsData : testMediaItems;
  }

  // Normalize each item to have a media[] array
  const normalized = items.map(item => {
    if (Array.isArray(item.media)) return item;
    // determine type and source
    const type = item.type || (item.src && item.src.match(/\.(mp4|mov)$/i) ? 'video' : 'image');
    const src  = item.src || item.image;
    return {
      ...item,
      media: [{ type, src, caption: item.caption || '' }]
    };
  });

  // Close on Escape key
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClickSection = id => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleMouse = (id, play) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const vids = el.querySelectorAll('video');
    vids.forEach(video => {
      if (play) video.play();
      else { video.pause(); video.currentTime = 0; }
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {normalized.map(item => (
            <div
              key={item.id}
              ref={el => (sectionRefs.current[item.id] = el)}
              className={`section ${expandedId === item.id ? 'expanded' : ''}`}
              onClick={() => handleClickSection(item.id)}
              onMouseEnter={() => handleMouse(item.id, true)}
              onMouseLeave={() => handleMouse(item.id, false)}
            >
              <div className="section-header">
                <h3 className="section-category">{item.category}</h3>
              </div>
              <div className="section-content">
                <div className="content-text">
                  <h4 className="section-title">{item.title}</h4>
                  <p className="section-caption">
                    {item.caption || item.description}
                  </p>
                </div>
                <div className="content-media">
                  {item.media.length === 1 ? (
                    // single media
                    item.media[0].type === 'video' ? (
                      <video
                        src={item.media[0].src}
                        loop
                        muted
                        preload="metadata"
                        className="section-video"
                      />
                    ) : (
                      <img
                        src={item.media[0].src}
                        alt={item.title}
                        className="section-image"
                      />
                    )
                  ) : (
                    // multiple media side-by-side
                    <div className="multi-media-row">
                      {item.media.map((m, idx) => (
                        m.type === 'video' ? (
                          <video
                            key={idx}
                            src={m.src}
                            loop
                            muted
                            preload="metadata"
                            className="section-video small"
                          />
                        ) : (
                          <img
                            key={idx}
                            src={m.src}
                            alt={`${item.title} ${idx+1}`}
                            className="section-image small"
                          />
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
