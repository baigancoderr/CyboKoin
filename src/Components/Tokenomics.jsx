import React from "react";
import "../Style/Tokenomics.css";
import tokenomicsImg from "../assets/token.png";

const Tokenomics = () => {
  return (
    <section className="tokenomics-section" id="token">
      <h2 className="tokenomics-heading">
        <span>CBKN</span> Tokenomics
      </h2>
      <p className="tokenomics-para">
        CBKN Tokenomics ensures a balanced ecosystem with fair distribution and
        long-term growth incentives. Designed for stability, rewards, and
        sustainable expansion across the CyboKoin network.
      </p>
      <div className="tokenomics-image">
        <img src={tokenomicsImg} alt="CBKN Tokenomics" />
      </div>
    </section>
  );
};

export default Tokenomics;
