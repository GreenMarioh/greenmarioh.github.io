import React from 'react';
import { FaCode, FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand font-mono">
            <span className="brand-accent">&gt;</span> Mohnish Kumar / GreenMario
          </div>
          <p className="footer-text">
            Software Engineer — Systems, Backend Architecture &amp; Applied Machine Learning.
          </p>
          <div className="footer-repo font-mono">
            <a
              href="https://github.com/GreenMarioh/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              <FaCode aria-hidden="true" />
              <span>Source Code on GitHub</span>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social-links">
            <a
              href="https://github.com/GreenMarioh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mohnish-k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/GreenMarioh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="footer-social-icon"
            >
              <SiX />
            </a>
          </div>

          <a href="#intro" className="back-to-top font-mono" aria-label="Return to top of page">
            <span>Back to Top</span>
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;