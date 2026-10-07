import React from 'react';
import { featuredProjects } from '../../content/content';
import { FaGithub, FaCheckCircle, FaLock, FaExternalLinkAlt } from 'react-icons/fa';
import './FeaturedWork.css';

const FeaturedWork = () => {
  return (
    <section id="work" className="featured-work-section" aria-labelledby="work-heading">
      {/* Backward-compatibility anchor for external bookmarks pointing to #flagship */}
      <span id="flagship" className="anchor-alias" aria-hidden="true" />

      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">SELECTED WORK</div>
          <h2 id="work-heading" className="section-title">Featured Engineering Work</h2>
          <p className="section-subtitle">
            Core systems projects demonstrating backend infrastructure, native systems programming, data pipelines, and control-plane engineering.
          </p>
        </div>

        <div className="featured-list">
          {featuredProjects.map((project) => (
            <article key={project.id} className="featured-card">
              <div className="featured-card-header">
                <div className="kicker-wrap font-mono">{project.kicker}</div>
                <div className="featured-actions">
                  {project.isPrivate ? (
                    <span className="private-badge font-mono" title="Private Repository - In Active Development">
                      <FaLock aria-hidden="true" />
                      <span>Private Repo (Active Dev)</span>
                    </span>
                  ) : null}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-btn font-mono"
                      aria-label={`${project.name} Live Demo`}
                    >
                      <FaExternalLinkAlt className="mini-icon" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-btn font-mono"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <FaGithub aria-hidden="true" />
                      <span>View Code</span>
                      <FaExternalLinkAlt className="mini-icon" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <div className="project-tagline font-mono">{project.tagline}</div>
              <p className="project-desc">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-row">
                    <FaCheckCircle className="highlight-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="project-stack">
                <span className="stack-label font-mono">TECHNOLOGIES:</span>
                <div className="stack-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
