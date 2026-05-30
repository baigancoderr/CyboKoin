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
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>

      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#case" onClick={() => setMenuOpen(false)}>Use Cases</a></li>
        <li><a href="#token" onClick={() => setMenuOpen(false)}>Tokenomics</a></li>
        <li><a href="#road" onClick={() => setMenuOpen(false)}>Roadmap</a></li>
        <li><a href="#presale" onClick={() => setMenuOpen(false)}>Presale</a></li>

        {/* ⭐ Whitepaper Button UNDER links on mobile */}
        <a
          href="#whitepaper"
          className="buy-btn mobile-whitepaper"
          onClick={() => setMenuOpen(false)}
        >
          Whitepaper
        </a>
      </ul>

      {/* Desktop button same as old  that need t*/}
      <a href="#whitepaper" className="buy-btn desktop-whitepaper">Whitepaper</a>
    </nav>
  );
};

export default Navbar;
