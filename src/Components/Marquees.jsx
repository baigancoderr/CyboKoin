import React from "react";
import bitcoin from "../assets/d1.png";
import cake from "../assets/d2.png";
import meta from "../assets/d3.png";
import sw from "../assets/d4.png";
// import dg from "../assets/d7.png";
import Marquee from "react-fast-marquee";

import "../Style/Marquees.css";

const Marquees = () => {
  const partners = [
    { name: "bitcoin", logo: bitcoin },
    { name: "cake", logo: cake },
    { name: "meta", logo: meta },
     { name: "sw", logo: sw },
    // { name: "dg", logo: dg },
  ];

  // Duplicate the list for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <Marquee gradient={false} speed={100}>
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="marquee-item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Marquees;
