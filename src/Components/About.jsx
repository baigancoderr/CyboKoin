import React, { useEffect, useRef } from "react";
import "../Style/About.css";
import cybokoin from "../assets/about.png";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate"); // scroll back → animation reset
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-left fade-left">
          <img src={cybokoin} alt="CyboKoin" className="about-img" />
        </div>

        <div className="about-right fade-right">
          <h2 className="about-title">
            About <span>CyboKoin</span>
          </h2>

          <p className="about-text">
            CyboKoin (CBKN) represents a new era of intelligent currency —
            bridging blockchain technology, artificial intelligence, and
            decentralized governance. Built on BEP-20, CyboKoin delivers fast,
            low-cost transactions while enabling real-world use cases across
            payments, staking, and NFT marketplaces.
          </p>

          <div className="mission-box">
            <p className="mission-about">
              Mission: Create A Sustainable, AI-Driven Financial Ecosystem For
              Global Adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
