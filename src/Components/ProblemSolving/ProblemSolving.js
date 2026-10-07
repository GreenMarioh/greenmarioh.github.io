import React from 'react';
import { problemSolving } from '../../content/content';
import { FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import './ProblemSolving.css';

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="problem-solving-section" aria-labelledby="ps-heading">
      {/* Backward-compatibility alias for legacy #telemetry */}
      <span id="telemetry" className="anchor-alias" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">ALGORITHMIC BENCHMARKS</div>
          <h2 id="ps-heading" className="section-title">Problem Solving &amp; Competitive Programming</h2>
          <p className="section-subtitle">
            Demonstrated algorithmic depth, data structures fluency, and verified platform contest ratings.
          </p>
        </div>

        {/* Primary CP Metrics */}
        <div className="ps-grid">
          {problemSolving.primary.map((cp) => (
            <a
              key={cp.platform}
              href={cp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`ps-card ${cp.highlight ? 'highlight-card' : ''}`}
              aria-label={`${cp.platform} profile - Rating ${cp.rating}`}
            >
              <div className="ps-card-top">
                <span className="ps-platform font-mono">{cp.platform}</span>
                <FaExternalLinkAlt className="ps-link-icon" aria-hidden="true" />
              </div>

              <div className="ps-stat-value font-mono">{cp.rating}</div>

              <div className="ps-sub-metric">
                <span className="sub-metric-label font-mono">BENCHMARK:</span>
                <span className="sub-metric-text">{cp.metric}</span>
              </div>

              <div className="ps-handle font-mono">
                <FaTerminal className="ps-handle-icon" aria-hidden="true" />
                <span>@{cp.handle}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Secondary Coding Trackers */}
        <div className="ps-trackers-bar">
          <span className="trackers-label font-mono">ADDITIONAL PLATFORMS:</span>
          <div className="trackers-links">
            {problemSolving.secondary.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tracker-link font-mono"
              >
                <span>{p.name}</span>
                <span className="tracker-metric">({p.metric})</span>
                <FaExternalLinkAlt className="mini-icon" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
