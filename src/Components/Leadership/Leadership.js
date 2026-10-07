import React from 'react';
import { leadershipAndCommunity } from '../../content/content';
import { FaUsers, FaChevronDown } from 'react-icons/fa';
import './Leadership.css';

const Leadership = () => {
  return (
    <section id="leadership" className="leadership-section" aria-labelledby="leadership-heading">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">ORGANIZATIONAL IMPACT</div>
          <h2 id="leadership-heading" className="section-title">Leadership &amp; Community Operations</h2>
          <p className="section-subtitle">
            Large-scale online community moderation, university society initiatives, and technical event administration.
          </p>
        </div>

        <div className="leadership-accordion">
          {leadershipAndCommunity.map((item, index) => (
            <details key={index} className="leadership-item">
              <summary className="leadership-summary">
                <div className="summary-left">
                  <div className="leadership-icon" aria-hidden="true">
                    <FaUsers />
                  </div>
                  <div className="summary-title-group">
                    <span className="lead-org">{item.organization}</span>
                    <span className="lead-role font-mono">{item.role}</span>
                  </div>
                </div>
                <div className="summary-right">
                  <span className="lead-period font-mono">{item.period}</span>
                  <FaChevronDown className="summary-chevron" aria-hidden="true" />
                </div>
              </summary>

              <div className="leadership-body">
                <div className="lead-scale-tag font-mono">
                  <span className="scale-label">SCOPE:</span> {item.scale}
                </div>
                <p className="lead-details">{item.details}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
