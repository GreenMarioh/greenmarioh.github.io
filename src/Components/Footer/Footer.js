import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// --- EDITABLE DATA ---
const socials = [
    { name: 'GitHub', url: 'https://github.com/GreenMarioh', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Mohnish-K', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://instagram.com/hmm.mohnish', icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {socials.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                {social.icon}
            </a>
        ))}
      </div>
      <p>This website may or may not have been vibe coded ;)</p>
      <p>With &lt;3, by Mohnish.</p>
    </footer>
  );
};

export default Footer;