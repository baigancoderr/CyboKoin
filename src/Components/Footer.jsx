import React, { useEffect, useState } from "react";
import "../Style/Footer.css";
import logo from "../assets/comm.png";
import telegram from "../assets/tele1.png";
import linkedin from "../assets/inn.png";
import instagram from "../assets/insta1.png";
import x from "../assets/x1.png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <p className="footer-desc">
            Built on BEP-20 for speed and efficiency — Cyboxian merges blockchain
            and AI to power payments, staking, governance, and NFT utilities
            across a global ecosystem.
          </p>
          <div className="footer-social">
            <a href="#"><img src={telegram} alt="Telegram" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={x} alt="x" /></a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <div>
            <h4>{isMobile ? "Links" : "Important Link"}</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#">Tokenomics</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">White Paper</a></li>
            </ul>
          </div>

          <div>
            <h4>Privacy</h4>
            <ul>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Right Logo */}
        <div className="footer-right">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
