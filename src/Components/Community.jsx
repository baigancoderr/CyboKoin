import React from "react";
import "../Style/Community.css";
import communityImg from "../assets/comm.png"; // left big image

// social media logo images
import telegram from "../assets/tele.png";
import xlogo from "../assets/x.png";
import linkedin from "../assets/in.png";
import instagram from "../assets/insta.png";

const Community = () => {
  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-left">
          <img src={communityImg} alt="Cybokoin Logo" className="community-img" />
        </div>

        <div className="community-right">
          <h2 className="community-title">
            JOIN THE CYBOKOIN <span>COMMUNITY</span>
          </h2>

          <p className="community-desc">
            Be Part Of An Intelligent Ecosystem That Merges AI Innovation With Blockchain Power.
            Whether You’re An Investor, Developer, Or Visionary, CyboKoin (CBKN) Invites You To
            Experience The Future Of Smart Decentralized Finance.
          </p>

          <h4 className="community-subtitle">
            CyboKoin – The Future Of Intelligent Currency!
          </h4>

          <div className="social-images">
            <img src={telegram} alt="Telegram" />
            <img src={xlogo} alt="X" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={instagram} alt="Instagram" />
          </div>

          {/* <div className="below-img">
            <img src={belowImg} alt="below section" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Community;
