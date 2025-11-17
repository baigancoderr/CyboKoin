import React, { useState, useEffect } from "react";
import "../Style/FeaturesSlider.css";

// IMPORT IMAGES (your real images here)
import stak from "../assets/stak.png";
import payment from "../assets/payment.png";
import uti from "../assets/uti.png";
import Governance from "../assets/Governance.png";
import nft from "../assets/nft.png";
import a4 from "../assets/a2.jpg";
import a5 from "../assets/a2.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a1.jpg";
import p1 from "../assets/pg.jpeg";
import p3 from "../assets/pg2.jpeg";
import p2 from "../assets/pg1.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/pg3.jpeg";

// NEW — 2 IMAGES PER CARD (frontImg + backImg)
const cardsList = [
  { 
    title: "STAKING & REWARDS",
    frontImg: stak,
    backImg: p2,
    desc: "Expand your crypto utilities."
  },
  { 
    title: "PAYMENT SYSTEM",
    frontImg: payment,
    backImg: p1,
    desc: "Instant, low-cost, borderless payments."
  },
  
  { 
    title: "UTILITY BOOST",
    frontImg: uti,
    backImg: p4,
    desc: "Expand your crypto utilities."
  },
  { 
    title: "Governance",
    frontImg: Governance,
    backImg: p3,
    desc: "Expand your crypto utilities."
  },
  { 
    title: "NFT",
    frontImg: nft,
    backImg: p5,
    desc: "Automated & secure blockchain contracts."
  }
];


const FeaturesSlider = () => {
  const [cards, setCards] = useState(cardsList);
  const [activeIndex, setActiveIndex] = useState(1);

  // NEXT SLIDE
  const goNext = () => {
    const newCards = [...cards];
    const first = newCards.shift();
    newCards.push(first);
    setCards(newCards);

    setActiveIndex((prev) => (prev + 1) % cardsList.length);
  };

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  });

  // DOT CLICK → JUMP SLIDE
  const goToSlide = (index) => {
    let diff = index - activeIndex;
    if (diff < 0) diff += cardsList.length;

    const newCards = [...cards];
    for (let i = 0; i < diff; i++) {
      const first = newCards.shift();
      newCards.push(first);
    }

    setCards(newCards);
    setActiveIndex(index);
  };

  return (
    <div className="slider-container" id="case">
      
      <h1 className="features-main-heading">
        <span className="use-cases-text">Use Cases of </span>
        <span className="cybokoin-text">CyboKoin</span>
      </h1>

      <p className="features-description">
        CyboKoin powers intelligent payments, staking, and governance through 
        AI-driven blockchain technology.
      </p>

      <div className="slider">
        {cards.slice(0, 3).map((card, index) => {
          
          let positionClass =
            index === 0 ? "left-tilt" :
            index === 1 ? "center-card" :
            "right-tilt";

          let wrapperClass =
            index === 0 ? "left-wrapper" :
            index === 1 ? "" :
            "right-wrapper";

          // 👇 NEW — FRONT img for center, BACK img for left/right
          const imgSrc = index === 1 ? card.frontImg : card.backImg;

          return (
            <div key={index} className={`feature-card-wrapper ${wrapperClass}`}>
              
              <div className={`feature-card ${positionClass}`}>
                <div className="img-box">
                  <img src={imgSrc} alt={card.title} />
                </div>

                <h2 className="feature-title">{card.title}</h2>

                {card.desc && index === 1 && (
                  <p className="feature-text">{card.desc}</p>
                )}
              </div>

              {index === 1 && <div className="center-shadow"></div>}
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="dots-container">
        {cardsList.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? "active-dot" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>

    </div>
  );
};

export default FeaturesSlider;
