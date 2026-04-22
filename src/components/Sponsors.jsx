import React from "react";
import "./Sponsors.css";

const sponsors = [
  "ALTIUM",
  "MathWorks",
  "SkyTech Pro",
  "DroneWorks",
  "AirMaster",
  "FlightGear",
];

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors-header">
        <h2>Our Sponsors</h2>
        <p>
          We're proud to partner with industry-leading companies who share our passion for innovation.
        </p>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((name, index) => (
          <div key={index} className="sponsor-card">
            {name}
          </div>
        ))}
      </div>

      <div className="sponsors-footer">
        <p>Interested in becoming a sponsor?</p>
        <button>Partner With Us</button>
      </div>
    </section>
  );
}