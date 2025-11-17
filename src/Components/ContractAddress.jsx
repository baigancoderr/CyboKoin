import React, { useState } from "react";
import { motion } from "framer-motion";   // ← Add this
import "../Style/ContractAddress.css";

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);
  const address = "0xdc787ca7cddE3A841a103F0E6f3f31C65F39355";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contract-section">
      <h2 className="contract-title">
        CONTRACT <span>ADDRESS</span>
      </h2>

      <div className="address-box">
        <input type="text" value={address} readOnly className="address-input" />
      </div>

      {/* === Animated Button === */}
      <motion.button
        className="copy-btn"
        onClick={handleCopy}
        initial={{ y: 50, opacity: 0 }}          // start below
        whileInView={{ y: 0, opacity: 1 }}       // animate to normal
        exit={{ y: 80, opacity: 0 }}             // hide again on exit
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}  // animate again on scroll
      >
        {copied ? "COPIED!" : "COPY"}
      </motion.button>
    </section>
  );
};

export default ContractAddress;
