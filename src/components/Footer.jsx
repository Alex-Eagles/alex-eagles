import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-brand">
          <h2>ALEX EAGLES</h2>
        </div>

        

        {/* Right */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>

          <div className="footer-email">
            <MdEmail />
            <span>info@droneteam.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Elite Drone Team. All rights reserved.</p>
      </div>
    </footer>
  );
}