import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { socialLinks } from '../../content/content';
import { FaGithub, FaLinkedin, FaDiscord, FaSteam, FaCheck, FaCopy } from 'react-icons/fa';
import { SiX, SiMonkeytype } from 'react-icons/si';
import './Contact.css';

const platformIcons = {
  GitHub: <FaGithub aria-hidden="true" />,
  LinkedIn: <FaLinkedin aria-hidden="true" />,
  X: <SiX aria-hidden="true" />,
  Discord: <FaDiscord aria-hidden="true" />,
  Steam: <FaSteam aria-hidden="true" />,
  Monkeytype: <SiMonkeytype aria-hidden="true" />,
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [copiedKey, setCopiedKey] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');
    setStatusType('sending');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Message transmission unavailable in local environment. Please connect via GitHub or LinkedIn.');
      setStatusType('error');
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        setStatus('Message delivered successfully!');
        setStatusType('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Email delivery error:', err);
        setStatus('Failed to send message. Please connect directly via LinkedIn or GitHub.');
        setStatusType('error');
      });
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2000);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      {/* Backward-compatibility alias for legacy #connect */}
      <span id="connect" className="anchor-alias" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">GET IN TOUCH</div>
          <h2 id="contact-heading" className="section-title">Contact &amp; Connect</h2>
          <p className="section-subtitle">
            Open for software engineering opportunities, backend systems discussions, and technical collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Transmission Form */}
          <div className="contact-form-card">
            <h3 className="card-heading">Send a Message</h3>
            <form className="transmission-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label font-mono">
                  NAME:
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label font-mono">
                  EMAIL:
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label font-mono">
                  MESSAGE:
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message details..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn font-mono">
                <span>Send Message</span>
              </button>

              {status && (
                <div className={`status-banner font-mono ${statusType}`} role="status">
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Connected Endpoints & Profiles */}
          <div className="contact-channels-card">
            <h3 className="card-heading">Platform Profiles</h3>
            <p className="channels-desc">
              Direct channels across developer platforms, professional networks, and gaming communities.
            </p>

            <div className="channels-grid">
              {socialLinks.map((item) => {
                const icon = platformIcons[item.name] || <FaGithub aria-hidden="true" />;
                if (item.url) {
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="channel-card"
                      aria-label={`${item.name} profile`}
                    >
                      <div className="channel-icon">{icon}</div>
                      <div className="channel-text">
                        <span className="channel-name">{item.name}</span>
                        <span className="channel-val font-mono">{item.display}</span>
                      </div>
                    </a>
                  );
                }
                return (
                  <button
                    key={item.name}
                    type="button"
                    className="channel-card channel-copy-btn"
                    onClick={() => handleCopy(item.value, item.name)}
                    aria-label={`Copy ${item.name} ID`}
                  >
                    <div className="channel-icon">{icon}</div>
                    <div className="channel-text">
                      <span className="channel-name">{item.name}</span>
                      <span className="channel-val font-mono">
                        {copiedKey === item.name ? 'COPIED TO CLIPBOARD!' : item.display}
                      </span>
                    </div>
                    <div className="copy-action-indicator">
                      {copiedKey === item.name ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;