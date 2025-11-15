import React, { useEffect, useRef } from "react";
import "../Style/TokenInfo.css";

import tokenBox1 from "../assets/1.png";
import tokenBox2 from "../assets/2.png";
import tokenBox3 from "../assets/3.png";
import tokenBox4 from "../assets/1.png";
import tokenBox5 from "../assets/3.png";

const tokenData = [
  { label: "Token Name", value: "CyboKoin", img: tokenBox1, className: "pos1" },
  { label: "Network", value: "BEP-20", img: tokenBox2, className: "pos2" },
  { label: "Symbol", value: "CBKN", img: tokenBox3, className: "pos3" },
  { label: "Total Supply", value: "1,000,000,000", img: tokenBox4, className: "pos4" },
  { label: "Decimal", value: "18", img: tokenBox5, className: "pos5" },
];

const TokenInfo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-tokens");
          } else {
            entry.target.classList.remove("animate-tokens");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="token-info-section" ref={sectionRef}>
      {tokenData.map((item, index) => (
        <div
          key={index}
          className={`token-card slide-bottom delay-${index}`}
        >
          <div className={`value-img ${item.className}`}>
            <img src={item.img} alt={item.value} className="value-bg" />
            <span className="value-text">{item.value}</span>
          </div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default TokenInfo;
