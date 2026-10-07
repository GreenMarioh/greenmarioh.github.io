import React from 'react';
import { experienceData } from '../../content/content';
import { FaBriefcase, FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="section-container">
        <div className="section-header">
          <div className="section-kicker font-mono">TRACK RECORD</div>
          <h2 id="experience-heading" className="section-title">Software Engineering Experience</h2>
          <p className="section-subtitle">
            Production backend development, community infrastructure engineering, and competitive placement outcomes.
          </p>
        </div>

        {/* 1. Production Work Experience */}
        <div className="exp-group">
          <div className="group-title-row">
            <FaBriefcase className="group-icon" aria-hidden="true" />
            <h3 className="group-title">Work Experience</h3>
          </div>
          <div className="exp-cards-list">
            {experienceData.work.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-card-header">
                  <div className="exp-company-group">
                    <h4 className="exp-company">{exp.company}</h4>
                    <span className="exp-role font-mono">{exp.role}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-badge font-mono">{exp.badge}</span>
                    <span className="exp-period-badge font-mono">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-details-list">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="exp-detail-item">
                      <span className="bullet-dash font-mono" aria-hidden="true">&gt;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Upcoming Placement */}
        <div className="exp-group">
          <div className="group-title-row">
            <FaGraduationCap className="group-icon" aria-hidden="true" />
            <h3 className="group-title">Placement Selection (Upcoming)</h3>
          </div>
          <div className="exp-cards-list">
            {experienceData.upcoming.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-card-header">
                  <div className="exp-company-group">
                    <h4 className="exp-company">{exp.company}</h4>
                    <span className="exp-role font-mono">{exp.role}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-badge font-mono">{exp.badge}</span>
                    <span className="exp-period-badge font-mono">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-details-list">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex} className="exp-detail-item">
                      <span className="bullet-dash font-mono" aria-hidden="true">&gt;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Seamless link to Competitive Programs */}
        <div className="exp-next-prompt">
          <span className="prompt-text font-mono">CONTINUE TO COMPETITIVE PROGRESSION:</span>
          <a href="#programs" className="prompt-link font-mono">
            <span>Explore Competitive Programs &amp; Challenges</span>
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;