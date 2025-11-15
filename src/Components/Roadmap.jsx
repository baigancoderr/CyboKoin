import React from "react";
import "../Style/Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap-section">
      <h1 className="roadmap-main-heading">
        <span className="road-text">Road</span>
        <span className="map-text">map</span>
      </h1>
      {/* === PHASE 1 === */}
      <div className="roadmap-phase phase-left">
        <div className="phase-content">
          <h4 className="phase-title">Phase</h4>
          <ul>
            <li>Token Smart Contract Deployment (Ethereum + BSC)</li>
            <li>Official Website & Whitepaper Release</li>
            <li>Private Sale & Seed Funding</li>
          </ul>
        </div>

        <div className="roadmap-box">
          <div className="phase-number-container">
            <div className="phase-number-bg"></div>
            <div className="phase-number">1</div>
          </div>
          <h3 className="phase-quarter">
            Q4 <br />  2025
          </h3>
        </div>
      </div>

  {/* === PHASE 2 === */}
  <div className="roadmap-phase phase-left">
        <div className="roadmap-box">
          <div className="phase-number-container">
            <div className="phase-number-bg"></div>
            <div className="phase-number">2</div>
          </div>
          <h3 className="phase-quarter">Q1 <br /> 2026</h3>
        </div>

        <div className="phase-content">
          <h4 className="phase-title">Phase</h4>
          <ul>
            <li>Pre-Sale & ICO Launch</li>
            <li>Listing On DEX (Uniswap / PancakeSwap)</li>
            <li>Initial Strategic Partnerships</li>
          </ul>
        </div>
      </div>
{/* === PHASE 3 === */}
      <div className="roadmap-phase phase-left">
        <div className="phase-content">
          <h4 className="phase-title">Phase</h4>
          <ul>
            <li>Pre-Sale & ICO Launch</li>
            <li>Staking Platform & Rewards Distribution</li>
            <li>Community Expansion & Global Campaigns</li>
          </ul>
        </div>
      

        <div className="roadmap-box">
          <div className="phase-number-container">
            <div className="phase-number-bg"></div>
            <div className="phase-number">3</div>
          </div>
          <h3 className="phase-quarter">
            Q2 <br /> 2026
          </h3>
        </div>
      </div>
{/* === PHASE 4 === */}
      <div className="roadmap-phase phase-left">
        <div className="roadmap-box">
          <div className="phase-number-container">
            <div className="phase-number-bg"></div>
            <div className="phase-number">4</div>
          </div>
          <h3 className="phase-quarter">Q3 <br /> 2026</h3>
        </div>

        <div className="phase-content">
          <h4 className="phase-title">Phase</h4>
          <ul>
            <li>Integration with UniversalOS Calendar & AI Modules</li>
            <li>Cybokrafts Tech Ecosystem adoption (R&D + AI Utilities)</li>
            <li>NFT Marketplace Development & Beta Launch</li>
          </ul>
        </div>
      </div>


  {/* === PHASE 5 === */}
      <div className="roadmap-phase phase-left">
        <div className="phase-content">
          <h4 className="phase-title">Phase</h4>
          <ul>
            <li>Cross-Chain Bridge (Polygon, Solana, Multi-Chain Expansion)</li>
            <li>Global Partnerships & Institutional Collaborations</li>
            <li>Governance DAO Launch for fully decentralized decision-making</li>
          </ul>
        </div>

        <div className="roadmap-box">
          <div className="phase-number-container">
            <div className="phase-number-bg"></div>
            <div className="phase-number">5</div>
          </div>
          <h3 className="phase-quarter">
            Q4 <br /> 2026
          </h3>
        </div>
      </div>
      
    </section>
  );
};

export default Roadmap;
