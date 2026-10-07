import React from 'react';
import { competitivePrograms } from '../../content/content';
import { FaTrophy, FaArrowRight } from 'react-icons/fa';
import './CompetitivePrograms.css';

const CompetitivePrograms = () => {
  return (
    <section id="programs" className="competitive-programs-section" aria-labelledby="programs-heading">
      {/* Anchor alias for backwards compatibility */}
      <span id="challenges" className="anchor-alias" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">COMPETITIVE PROGRESSION</div>
          <h2 id="programs-heading" className="section-title">Competitive Programs &amp; Challenges</h2>
          <p className="section-subtitle">
            Selected programs, challenges, and competitive experiences that shaped my engineering journey.
          </p>
        </div>

        <div className="milestones-timeline">
          {competitivePrograms.map((item, index) => (
            <article
              key={item.id}
              className="milestone-card"
              tabIndex="0"
            >
              {/* Milestone Header */}
              <div className="milestone-top-row">
                <div className="milestone-meta-group">
                  <span className="milestone-index font-mono">0{index + 1}</span>
                  <span className="milestone-type-pill font-mono">{item.type}</span>
                  <span className="milestone-org-tag font-mono">{item.organization}</span>
                </div>
                <span className="milestone-year font-mono">{item.year}</span>
              </div>

              {/* Milestone Title & Progression Subtitle */}
              <h3 className="milestone-title">{item.title}</h3>
              <div className="milestone-subtitle font-mono">{item.subtitle}</div>

              {/* Visual Progression Banner */}
              <div className="progression-banner" aria-label={`Progression: ${item.progressionText}`}>
                <span className="progression-icon" aria-hidden="true">
                  <FaArrowRight />
                </span>
                <span className="progression-text font-mono">{item.progressionText}</span>
              </div>

              {/* Key Metrics Strip */}
              <div className="milestone-metrics-strip">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="milestone-metric-chip">
                    <span className="metric-label font-mono">{m.label}:</span>
                    <span className="metric-val font-mono">{m.val}</span>
                  </div>
                ))}
                <div className="milestone-badge-pill font-mono">
                  <FaTrophy className="trophy-icon" aria-hidden="true" />
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Narrative Description */}
              <p className="milestone-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitivePrograms;
