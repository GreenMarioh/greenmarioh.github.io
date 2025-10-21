// src/components/Tech/Tech.js

import React, { useState } from 'react';
import './Tech.css';
import Modal from '../Modal/Modal';
// --- Import Icons ---
import { FaJava, FaGithub, FaExternalLinkAlt, FaPlus, FaUserSecret } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiDart, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMysql, SiPostgresql, SiKalilinux, SiLatex, SiGit, SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { GiBrandyBottle } from "react-icons/gi";
import { DiLinux } from "react-icons/di";

// --- EDITABLE DATA ---
const projects = [
  {
    name: "Shortest/Unique Paths Visualizer",
    description: "A dynamic grid-based visualizer that animates pathfinding with obstacles, using both DP and 8-directional shortest path search (Dijkstra's Algorithm).",
    images: ["https://greenmario.hep.gg/J4a1_isiE.gif", "https://greenmario.hep.gg/9-YNqoHf_.png"],
    liveUrl: "https://greenmarioh.github.io/unique-paths-visualizer/",
    githubUrl: "https://github.com/GreenMarioh/unique-paths-visualizer"
  },
  {
    name: "Whipper - Custom Discord Bot",
    description: "Whipper is a versatile Discord bot designed to enhance your gaming community's experience with a suite of useful and fun features. Used for checking game server statuses, looking up player stats, or just having fun with randomizers.",
    images: ["https://greenmario.hep.gg/PZk_SCagG.png", "https://greenmario.hep.gg/ai5KBGL2Q.png","https://greenmario.hep.gg/-IHqoSY_k.png"],
    githubUrl: "https://github.com/GreenMarioh/Whipper"
  },
  {
    name: "Spotify-YouTube playlist converter",
    description: "This project allows you to convert a Spotify playlist into a private YouTube playlist by searching for matching videos (usually official audio) on YouTube and vice versa.",
    images: ["https://greenmario.hep.gg/RqxhkQzTv.png"],
    githubUrl: "https://github.com/GreenMarioh/yt-spotify-converter"
  },
];

const skills = { 
    Programming: [ { name: "C/C++", icon: <SiCplusplus />, special: true }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "Dart", icon: <SiDart /> }, { name: "Java", icon: <FaJava />}, ], Web: [ { name: "HTML", icon: <SiHtml5 /> }, { name: "CSS", icon: <SiCss3 /> }, { name: "ReactJS", icon: <SiReact />}, { name: "NodeJS", icon: <SiNodedotjs /> }, ], Database: [ { name: "MySQL", icon: <SiMysql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, ], Security: [ { name: "Kali Linux", icon: <SiKalilinux /> }, { name: "Nmap", icon: <TbTargetArrow /> }, { name: "Metasploit", icon: <GiBrandyBottle />}, { name: "Burp Suite", icon: <GiBrandyBottle />}, ], Misc: [ { name: "Git/GitHub", icon: <SiGit /> }, { name: "LaTeX", icon: <SiLatex />}, { name: "Linux", icon: <DiLinux /> }, { name: "RegEx", icon: <DiLinux /> }, ]
};

const profiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/GreenMario/", icon: <SiLeetcode />, desc: "300+ problems solved" }, { name: "CodeForces", url: "https://codeforces.com/profile/greenmario", icon: <SiCodeforces />, desc: "Max Rating: 1132" }, { name: "CodeChef", url: "https://www.codechef.com/users/green_mario", icon: <SiCodechef />, desc: "Max Rating: 1412\n ⭐⭐ Div 3" }, { name: "GeeksForGeeks", desc: "40+ Problems Solved", url: "https://www.geeksforgeeks.org/user/mohnishk65c8/", icon: <SiGeeksforgeeks /> }, { name: "TryHackMe", url: "https://tryhackme.com/p/Green.Mario", icon: <FaUserSecret />, desc: "Top 15% Global" },
];

// --- COMPONENT LOGIC ---
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
                <p className="subsection-description">Made a bunch of stuff, come check them out.</p>
                <div className="projects-grid">
                    {projects.map((proj, index) => (
                        // 1. onClick handler is now on the entire card
                        <div key={index} className="project-card" onClick={() => openModal(proj)}>
                            {/* 2. onClick is removed from the h4 */}
                            <h4>{proj.name}</h4>
                            <p className="project-description">{proj.description}</p>
                            <div className="project-links">
                                {/* 3. Add onClick to links to stop them from triggering the card's onClick */}
                                {proj.liveUrl && (
                                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                            <div className="view-project-cue">
                                <span>Expand &rarr;</span>
                            </div>
                        </div>
                    ))}
                     <a href="https://github.com/GreenMarioh" target="_blank" rel="noopener noreferrer" className="project-card coming-soon">
                        <div><FaPlus /><h4>Coming Soon</h4></div>
                    </a>
                </div>
            </div>

            {/* Other subsections remain unchanged... */}
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

            <div className="subsection">
                <h3>Coding Profiles</h3>
                <p className="subsection-description">Trying to set my foot in problem solving and competitive programming.</p>
                <div className="profiles-grid">
                     {profiles.map(profile => (
                         <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="profile-button">
                             <div className="profile-icon">{profile.icon}</div>
                             <div className="profile-text"><strong>{profile.name}</strong><span>{profile.desc}</span></div>
                         </a>
                     ))}
                 </div>
            </div>
            
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
                        <br></br>
                         <div className="modal-project-links">
                {modalContent.liveUrl && (
                    <a href={modalContent.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                        <FaExternalLinkAlt />
                        <span> Live Demo</span>
                    </a>
                )}
                <a href={modalContent.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                    <FaGithub />
                    <span> GitHub</span>
                </a>
            </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Tech;