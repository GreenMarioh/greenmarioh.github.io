// src/components/Tech/Tech.js

import React, { useState } from 'react';
import './Tech.css';
import Modal from '../Modal/Modal'; // <-- Re-importing the Modal
// --- Import Icons ---
import { FaJava, FaGithub, FaExternalLinkAlt, FaPlus, FaUserSecret } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiDart, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMysql, SiPostgresql, SiKalilinux, SiLatex, SiGit, SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { GiBrandyBottle } from "react-icons/gi";
import { DiLinux } from "react-icons/di";

// --- EDITABLE DATA ---
const projects = [
  {
    name: "Project One",
    description: "A short and crisp description of Project One, highlighting its main features and the technology used.",
    images: ["/assets/projects/p1_ss1.png", "/assets/projects/p1_gif1.gif"], 
    liveUrl: "https://live-demo.com",
    githubUrl: "https://github.com/your-username/project-one"
  },
  {
    name: "Project Two",
    description: "This is the description for Project Two. It solves a real-world problem using modern web development tools.",
    images: ["/assets/projects/p2_ss1.png"], 
    githubUrl: "https://github.com/your-username/project-two"
  },
];

const skills = { // ... (Skills data remains the same)
    Programming: [ { name: "C/C++", icon: <SiCplusplus />, special: true }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "Dart", icon: <SiDart /> }, { name: "Java", icon: <FaJava />}, ], Web: [ { name: "HTML", icon: <SiHtml5 /> }, { name: "CSS", icon: <SiCss3 /> }, { name: "ReactJS", icon: <SiReact />}, { name: "NodeJS", icon: <SiNodedotjs /> }, ], Database: [ { name: "MySQL", icon: <SiMysql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, ], Security: [ { name: "Kali Linux", icon: <SiKalilinux /> }, { name: "Nmap", icon: <TbTargetArrow /> }, { name: "Metasploit", icon: <GiBrandyBottle />}, { name: "Burp Suite", icon: <GiBrandyBottle />}, ], Misc: [ { name: "Git/GitHub", icon: <SiGit /> }, { name: "LaTeX", icon: <SiLatex />}, { name: "Linux", icon: <DiLinux /> }, { name: "RegEx", icon: <DiLinux /> }, ]
};

const profiles = [ // ... (Profiles data remains the same)
    { name: "LeetCode", url: "#", icon: <SiLeetcode />, desc: "300+ problems solved" }, { name: "CodeForces", url: "#", icon: <SiCodeforces />, desc: "Pupil Rating" }, { name: "CodeChef", url: "#", icon: <SiCodechef />, desc: "4 Star Coder" }, { name: "GeeksForGeeks", url: "#", icon: <SiGeeksforgeeks />, desc: "Institute Rank 1" }, { name: "TryHackMe", url: "#", icon: <FaUserSecret />, desc: "Top 1% Global" },
];

// --- COMPONENT LOGIC ---
const Tech = () => {
    // Re-introducing state for the modal
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setModalContent(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <section id="tech" className="tech-container">
            <h2>Tech Arsenal</h2>

            {/* Tech Projects */}
            <div className="subsection">
                <h3>Projects</h3>
                <div className="projects-grid">
                    {projects.map((proj, index) => (
                        <div key={index} className="project-card">
                            <h4 onClick={() => openModal(proj)}>{proj.name}</h4>
                            <p className="project-description">{proj.description}</p>
                            <div className="project-links">
                                {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>}
                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                            </div>
                        </div>
                    ))}
                     <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="project-card coming-soon">
                        <div><FaPlus /><h4>Coming Soon</h4></div>
                    </a>
                </div>
            </div>

            {/* Tech Skills subsection ... */}
            <div className="subsection">
                <h3>Skills</h3>
                <div className="skills-layout">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skill-category">
                            <h4>{category}</h4>
                            <ul>
                                {skillList.map(skill => (
                                    <li key={skill.name} className={skill.special ? 'special-skill' : ''}>
                                        {skill.icon} {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Profiles subsection ... */}
            <div className="subsection">
                <h3>Coding Profiles</h3>
                <div className="profiles-grid">
                     {profiles.map(profile => (
                         <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="profile-button">
                             <div className="profile-icon">{profile.icon}</div>
                             <div className="profile-text"><strong>{profile.name}</strong><span>{profile.desc}</span></div>
                         </a>
                     ))}
                 </div>
            </div>
            
            {/* Re-introducing the Modal component with updated content */}
            <Modal show={isModalOpen} onClose={closeModal}>
                {modalContent && (
                    <div className="project-modal-content">
                        <h3>{modalContent.name}</h3>
                        <p>{modalContent.description}</p>
                        <div className="screenshots">
                           {modalContent.images.map((img, i) => (
                               <img key={i} src={img} alt={`${modalContent.name} screenshot ${i+1}`} />
                           ))}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Tech;