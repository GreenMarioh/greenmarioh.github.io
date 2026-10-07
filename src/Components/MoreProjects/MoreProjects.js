import React from 'react';
import { secondaryProjects } from '../../content/content';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from 'react-icons/fa';
import './MoreProjects.css';

const MoreProjects = () => {
  return (
    <section id="projects" className="more-projects-section" aria-labelledby="more-projects-heading">
      {/* Backward-compatibility anchor for legacy external links */}
      <span id="tech" className="anchor-alias" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">TECHNICAL PROTOTYPES</div>
          <h2 id="more-projects-heading" className="section-title">More Projects &amp; Utilities</h2>
          <p className="section-subtitle">
            Additional utilities, algorithmic visualizers, computer vision prototypes, and automation tools.
          </p>
        </div>

        <div className="compact-projects-grid">
          {secondaryProjects.map((proj) => (
            <article key={proj.name} className="compact-project-card">
              <div className="compact-card-top">
                <div className="compact-icon-wrap" aria-hidden="true">
                  <FaCodeBranch />
                </div>
                <div className="compact-links">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="compact-link"
                      aria-label={`${proj.name} Live Demo`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {proj.repo ? (
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="compact-link"
                      aria-label={`${proj.name} GitHub Repository`}
                    >
                      <FaGithub />
                    </a>
                  ) : proj.isTodo ? (
                    <span className="todo-tag font-mono" title="Awaiting public link">
                      TODO(content)
                    </span>
                  ) : null}
                </div>
              </div>

              <h3 className="compact-project-title">{proj.name}</h3>
              <div className="compact-project-tagline font-mono">{proj.tagline}</div>
              <p className="compact-project-desc">{proj.description}</p>

              <div className="compact-tech-pills">
                {proj.stack.map((t) => (
                  <span key={t} className="compact-pill font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
