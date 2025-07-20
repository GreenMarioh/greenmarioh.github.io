import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaCat } from 'react-icons/fa';

// --- EDITABLE DATA ---
const socials = [
    { name: 'GitHub', url: 'https://github.com/GreenMarioh', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Mohnish-K', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://instagram.com/hmm.mohnish', icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* 1. Group all text content into a new div */}
        <div className="footer-text">
          <p>This website may or may not have been vibe coded ;)</p>
          <p>With &lt;3, by Mohnish.</p>
          <p className="repo-link">
            <a href="https://github.com/GreenMarioh/portfolio" target="_blank" rel="noopener noreferrer">
              <FaCode />
              <span>View Source Code</span>
            </a>
          </p>
        </div>
        
        {/* 2. Social links are now a sibling to the text group */}
        <div className="social-links">
          {socials.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </footer>

      {/* Kitty icon remains outside the main footer for fixed positioning */}
      <a href="#intro" className="kitty-icon" aria-label="Scroll to top">
        <FaCat />
      </a>
    </>
  );
};

export default Footer;