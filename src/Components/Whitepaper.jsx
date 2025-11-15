import React from "react";
import "../style/Whitepaper.css";
import whitepaperImg from "../assets/whitepaper.jpg"; 

const Whitepaper = () => {
  return (
    <section className="whitepaper-section" id="whitepaper">
      <h1 className="whitepaper-main-heading">Whitepaper</h1>
      <div className="whitepaper-container">
        
        {/* Left Side - Image */}
        <div className="whitepaper-left">
          <img
            src={whitepaperImg}
            alt="Whitepaper"
            className="whitepaper-image"
          />
        </div>

        {/* Right Side - Text */}
        <div className="whitepaper-right">
          <h2 className="whitepaper-title">Explore Whitepaper</h2>
          <p className="whitepaper-desc">
            Dive deeper into the CyboKoin ecosystem through our detailed
            documentation. Each document provides insights into our technology,
            vision, tokenomics, and roadmap designed to drive global adoption of
            AI-powered blockchain finance.
          </p>

          <div className="whitepaper-links">
            <div className="wp-row">
              <span className="wp-text" title="Whitepaper">Whitepaper</span>
              <span className="wp-text" title="Terms Of Token Sale">Terms Of Token Sale</span>
            </div>
            <div className="wp-row">
              <span className="wp-text" title="Privacy Policy">Privacy Policy</span>
              <span className="wp-text" title="Presale">Presale</span>
            </div>
          </div>

          <button className="download-btn">
            <i className="fa-solid fa-download"></i> Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
