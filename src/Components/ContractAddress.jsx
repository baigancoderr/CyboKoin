import React, { useState } from "react";
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

      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "COPIED!" : "COPY"}
      </button>
    </section>
  );
};

export default ContractAddress;
