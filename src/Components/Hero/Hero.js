import React, { Suspense, lazy } from 'react';
import { personalInfo } from '../../content/content';
import { FaFilePdf, FaGithub, FaArrowDown, FaCode } from 'react-icons/fa';
import './Hero.css';

const NetworkCanvas = lazy(() => import('../NetworkCanvas/NetworkCanvas'));

const Hero = () => {
  return (
    <section id="intro" className="hero-section" aria-labelledby="hero-title">
      <Suspense fallback={<div className="network-fallback" aria-hidden="true" />}>
        <NetworkCanvas />
      </Suspense>

      <div className="hero-container">
        <div className="hero-badge">
          <FaCode className="badge-icon" aria-hidden="true" />
          <span className="badge-text font-mono">PORTFOLIO // SOFTWARE_ENGINEERING</span>
        </div>

        <h1 id="hero-title" className="hero-name">
          {personalInfo.name} <span className="hero-handle font-mono">/{personalInfo.handle}/</span>
        </h1>

        <div className="hero-headline">{personalInfo.headline}</div>
        <p className="hero-subheadline">{personalInfo.subHeadline}</p>

        <p className="hero-bio">{personalInfo.bio}</p>

        <div className="hero-telemetry font-mono" aria-label="Key Qualifications & Problem Solving Telemetry">
          {personalInfo.telemetryBadges.map((badge, index) => (
            <div key={index} className="telemetry-pill">
              <span className="pill-label">{badge.label}:</span>
              <span className="pill-val">{badge.val}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            <span>View Featured Work</span>
            <FaArrowDown aria-hidden="true" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaFilePdf aria-hidden="true" />
            <span>Resume / CV</span>
          </a>
          <a
            href={`https://github.com/${personalInfo.githubHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="GitHub Profile"
          >
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
