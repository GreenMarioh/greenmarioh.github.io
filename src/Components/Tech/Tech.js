// src/components/Tech/Tech.js

import React, { useState } from 'react';
import './Tech.css';
import Modal from '../Modal/Modal';

// --- Import Icons ---
// Note the different sources (fa, si, gi, di) for different icon sets
import { FaJava, FaGithub, FaExternalLinkAlt, FaPlus, FaUserSecret } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiDart, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMysql, SiPostgresql, SiKalilinux, SiLatex, SiGit, SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si"; // SiGeeksforgeeks added
import { TbTargetArrow } from "react-icons/tb"; // TbBrandGeeks removed
import { GiBrandyBottle } from "react-icons/gi";
import { DiLinux } from "react-icons/di";
//import { TbBrandGeeks, TbTargetArrow } from "react-icons/tb"; // TbTargetArrow added

// --- EDITABLE DATA ---
// To add a new project, just add a new object to this array.
const projects = [
  {
    name: "Project One",
    // Make sure to place your images in the `public` folder, e.g., `public/assets/projects/p1_ss1.png`
    images: ["/assets/projects/p1_ss1.png", "/assets/projects/p1_gif1.gif"], 
    liveUrl: "https://live-demo.com",
    githubUrl: "https://github.com/your-username/project-one"
  },
  {
    name: "Project Two",
    images: ["/assets/projects/p2_ss1.png"], 
    liveUrl: "https://live-demo-2.com",
    githubUrl: "https://github.com/your-username/project-two"
  }
];

// To add/remove skills, edit the lists below. special: true makes it green.
const skills = {
    Programming: [
        { name: "C/C++", icon: <SiCplusplus />, special: true },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "Java", icon: <FaJava />},
    ],
    Web: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "ReactJS", icon: <SiReact />},
        { name: "NodeJS", icon: <SiNodedotjs /> },
    ],
    Database: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    Security: [
    { name: "Kali Linux", icon: <SiKalilinux /> },
    { name: "Nmap", icon: <TbTargetArrow /> }, // <-- FIXED
    { name: "Metasploit", icon: <GiBrandyBottle />},
    { name: "Burp Suite", icon: <GiBrandyBottle />},
],
    Misc: [
        { name: "Git/GitHub", icon: <SiGit /> },
        { name: "LaTeX", icon: <SiLatex />},
        { name: "Linux", icon: <DiLinux /> },
        { name: "RegEx", icon: <DiLinux /> },
    ]
};

// To update your profile links and descriptions, edit here.
const profiles = [
    { name: "LeetCode", url: "#", icon: <SiLeetcode />, desc: "300+ problems solved" },
    { name: "CodeForces", url: "#", icon: <SiCodeforces />, desc: "Pupil Rating" },
    { name: "CodeChef", url: "#", icon: <SiCodechef />, desc: "4 Star Coder" },
    { name: "GeeksForGeeks", url: "#", icon: <SiGeeksforgeeks />, desc: "Institute Rank 1" },
    { name: "TryHackMe", url: "#", icon: <FaUserSecret />, desc: "Top 1% Global" },
];


// --- COMPONENT LOGIC ---
// No need to edit below this line unless you want to change the structure.
const Tech = () => {
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
                            <div className="project-links">
                                <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>
                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                            </div>
                        </div>
                    ))}
                     <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="project-card coming-soon">
                        <div>
                            <FaPlus />
                            <h4>Coming Soon</h4>
                        </div>
                    </a>
                </div>
            </div>

            {/* Tech Skills */}
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

            {/* Profiles */}
            <div className="subsection">
                 <h3>Coding Profiles</h3>
                 <div className="profiles-grid">
                     {profiles.map(profile => (
                         <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="profile-button">
                             <div className="profile-icon">{profile.icon}</div>
                             <div className="profile-text">
                                 <strong>{profile.name}</strong>
                                 <span>{profile.desc}</span>
                             </div>
                         </a>
                     ))}
                 </div>
            </div>

            <Modal show={isModalOpen} onClose={closeModal}>
                {modalContent && (
                    <div className="project-modal-content">
                        <h3>{modalContent.name}</h3>
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