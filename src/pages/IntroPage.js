// src/pages/IntroPage.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/intropage.css';
import logo from "../assets/icons/team logo .png";
const IntroPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [showDesign, setShowDesign] = useState(false);
  const [showBuild, setShowBuild] = useState(false);
  const [showInnovate, setShowInnovate] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sequence timing for animations
    const logoTimer = setTimeout(() => {
      setShowDesign(true);
    }, 2000); // Logo appears for 2s before first word

    const designTimer = setTimeout(() => {
      setShowBuild(true);
    }, 3000); // Design appears 1s after logo is fully visible

    const buildTimer = setTimeout(() => {
      setShowInnovate(true);
    }, 4000); // Build appears 1s after Design

    const fadeOutTimer = setTimeout(() => {
      setShowTransition(true);
    }, 6000); // Everything stays for 2s after all words appear

    const navigationTimer = setTimeout(() => {
      
      localStorage.setItem("hasSeenIntro", "true")
      navigate("/");
    }, 7500); // Navigate after transition completes

    // Cleanup timers
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(designTimer);
      clearTimeout(buildTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="intro-container">
      <AnimatePresence>
        {showLogo && !showTransition && (
          <motion.div
            className="logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Placeholder logo - replace with your actual logo */}
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
          </motion.div>
        )}

        <div className="words-container">
          {showDesign && !showTransition && (
            <motion.div
              className="word design"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              DESIGN
            </motion.div>
          )}

          {showBuild && !showTransition && (
            <motion.div
              className="word build"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              BUILD
            </motion.div>
          )}

          {showInnovate && !showTransition && (
            <motion.div
              className="word innovate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              INNOVATE
            </motion.div>
          )}
        </div>

        {showTransition && (
          <motion.div
            className="black-transition"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroPage;