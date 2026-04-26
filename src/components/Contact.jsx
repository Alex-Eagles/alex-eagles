import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have a project in mind or want to learn more about our services? Get in touch with us!
        </p>
      </div>

      <div className="contact-container">
        {/* Left side */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="info-item">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>alex_eagles@alexu.edu.eg</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+201094486922</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="your.email@example.com" />

          <label>Subject</label>
          <input type="text" placeholder="How can we help?" />

          <label>Message</label>
          <textarea placeholder="Your message..." rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}