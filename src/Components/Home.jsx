import React from "react";
import "../Style/Home.css";
import videoBg from "../assets/h2.mp4";

const Home = () => {
  return (
    <section className="cybokoin-section">
      {/* ---- Left Content ---- */}
      <div className="cybokoin-left">
        <h4 className="cybokoin-heading">The Future Of Intelligent Currency</h4>

        <h2 className="cybokoin-subheading">
          Experience Next-Generation, AI-Powered Finance With{" "}
          CyboKoin
          <span className="highlight">(CBKN)</span>
        </h2>

        <p className="cybokoin-desc">
          Built On BEP-20 For Speed And Efficiency — CyboKoin Merges Blockchain
          And AI To Power Payments, Staking, Governance, And NFT Utilities
          Across A Global Ecosystem.
        </p>

        <button className="cybokoin-btn">Buy Now</button>
      </div>

      {/* ---- Right Side (Single Circular Video) ---- */}
      <div className="cybokoin-right">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="cybokoin-video">
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Home;