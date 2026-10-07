import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
  { label: 'Overview', href: '#intro' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Programs', href: '#programs' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Problem Solving', href: '#problem-solving' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#intro" className="brand-logo" onClick={closeMenu}>
          <span className="brand-bracket">[</span>
          <span className="brand-text">mohnish</span>
          <span className="brand-bracket">]</span>
          <span className="status-indicator" title="Status: Online / Ready" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <nav
        className={`mobile-nav ${isOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
