import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    company: "Paragon",
    role: "Assistant Developer",
    details: [
      "Assistant developer for premium features used in large gaming communities (VALORANT and VALORANT LFG Discords)",
      "Implemented feature-gated systems including role-based access and premium command routing"
    ]
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <FaBriefcase className="exp-icon" />
                <h3>{exp.company}</h3>
              </div>
              <span className="role-tag">{exp.role}</span>
            </div>
            <ul className="experience-details">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;