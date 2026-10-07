import React from 'react';
import { technicalCapabilities } from '../../content/content';
import './TechnicalCapabilities.css';

const TechnicalCapabilities = () => {
  return (
    <section id="skills" className="capabilities-section" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">TECHNICAL ARSENAL</div>
          <h2 id="capabilities-heading" className="section-title">Technical Capabilities</h2>
          <p className="section-subtitle">
            Structured capabilities across systems programming, backend architectures, applied ML, and infrastructure.
          </p>
        </div>

        <div className="capabilities-grid">
          {technicalCapabilities.map((group) => (
            <div key={group.domain} className="capability-card">
              <div className="domain-label font-mono">{group.domain}</div>
              <div className="skills-pill-group">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`capability-pill font-mono ${skill === 'C/C++' ? 'highlight-skill' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
