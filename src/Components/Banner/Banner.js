import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the menu
import './Banner.css';

const Banner = () => {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="banner">
      {/* Desktop Navigation (visible on larger screens) */}
      <nav className="desktop-nav">
        <a href="#intro">Home</a>
        <a href="#tech">Tech</a>
        <a href="#non-tech">Creative</a>
        <a href="#connect">Connect</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Menu Icon (Hamburger/Close Icon) */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <a href="#intro" onClick={closeMenu}>Home</a>
        <a href="#tech" onClick={closeMenu}>Tech</a>
        <a href="#non-tech" onClick={closeMenu}>Creative</a>
        <a href="#connect" onClick={closeMenu}>Connect</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Banner;