import React, { useState } from "react";
import "../Style/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links Section */ }
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" className="active" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#usecases" onClick={() => setMenuOpen(false)}>Use Cases</a></li>
        <li><a href="#tokenomics" onClick={() => setMenuOpen(false)}>Tokenomics</a></li>
        <li><a href="#roadmap" onClick={() => setMenuOpen(false)}>Roadmap</a></li>
        <li><a href="#presale" onClick={() => setMenuOpen(false)}>Presale</a></li>
      </ul>

      {/* Whitepaper Button */}
      <a href="#whitepaper" className="buy-btn" onClick={() => setMenuOpen(false)}>Whitepaper</a>
    </nav>
  );
};

export default Navbar;
