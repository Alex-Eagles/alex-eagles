// AnimatedCard.jsx
// Uses Framer Motion to morph the button into the modal and back
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import '../styles/card.css';

function AnimatedCard({ name, location, description }) {
  const [isModalOpen, setModalOpen] = useState(false);
  // unique id per card instance
  const layoutId = `card-${name}`;

  return (
    <div className="card">
      {/* Animated trigger button shares layoutId with modal */}
      <motion.button
        className="card-open-button"
        layoutId={layoutId}
        onClick={() => setModalOpen(true)}
      >
        More of {name}
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            layoutId={layoutId}
            title={name}
            videoPath="/IMG_0534.MOV"
          >
            <div className="details-content">
              {/* place additional modal children here */}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedCard;