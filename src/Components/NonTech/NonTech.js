import React, { useState } from 'react';
import './NonTech.css';
import Modal from '../Modal/Modal';
// Import icons & logos
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobelightroom } from "react-icons/si";

// Make sure to add your logo files in the public/assets/logos folder
// Example: public/assets/logos/riot.png
const communityLogos = {
    riot: '/assets/logos/riot.png',
    glorious: '/assets/logos/glorious.svg',
    ssg: '/assets/logos/SSG.png',
    gfg: '/assets/logos/gfg.png',
    cybervault: '/assets/logos/cybervault.jpeg',
};

// --- EDITABLE DATA ---
const creativeSkills = [
  { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
  { name: "After Effects", icon: <SiAdobeaftereffects /> },
  { name: "Photoshop", icon: <SiAdobephotoshop /> },
  { name: "Lightroom", icon: <SiAdobelightroom /> },
];

const communityData = [
  
  {
    name: "Glorious",
    logo: communityLogos.glorious,
    position: "Community Moderator - TTV and Discord", // <-- ADDED
    dates: "August 2020 - October 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Moderated forums and provided user support."
  },
  {
    name: "Riot Games (VALORANT)",
    logo: communityLogos.riot,
      position: "Community Volunteer", // <-- ADDED
    dates: "May 2020 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managed community events and feedback for VALORANT."
  },
  {
    name: "SpaceStation Gaming",
    logo: communityLogos.ssg,
    position: "Community Moderator", // <-- ADDED
    dates: "October 2020 - May 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Organized online tournaments and streams."
  },
];

const clubData = [
  {
    name: "GeeksForGeeks Student Chapter",
    logo: communityLogos.gfg,
      position: "Administration Member", // <-- ADDED
    dates: "July 2023 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hosted coding workshops and hackathons."
  },
  {
    name: "CyberVault",
    logo: communityLogos.cybervault,
      position: "Management Member", // <-- ADDED
    dates: "2023 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conducted cybersecurity awareness sessions."
  },
];

// --- COMPONENT LOGIC ---
const NonTech = () => {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item) => {
        setModalContent(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    const renderGrid = (data) => (
        <div className="community-grid">
            {data.map(item => (
                <div key={item.name} className="community-card" onClick={() => openModal(item)}>
                    <img src={item.logo} alt={`${item.name} logo`} className="community-logo" />
                    <h4>{item.name}</h4>
                    <div className="card-details">
                    <p className="card-position">{item.position}</p>
                    <p className="card-dates">{item.dates}</p>
                </div>
                </div>
            ))}
        </div>
    );

  return (
    <section id="non-tech" className="non-tech-container">
      <h2>Creative & Community</h2>

      <div className="subsection">
          <h3>Creative Suite</h3>
          <p className="description"></p>
          <div className="creative-skills">
              {creativeSkills.map(skill => (
                  <div key={skill.name} className="creative-skill-item">
                      {skill.icon}
                      <span>{skill.name}</span>
                  </div>
              ))}
          </div>
      </div>

      <div className="subsection">
        <h3>Community Management</h3>
        <p className="description">Volunteered for managing various online communities.</p>
        {renderGrid(communityData)}
      </div>

      <div className="subsection">
        <h3>College Clubs</h3>
        {renderGrid(clubData)}
      </div>

       <Modal show={isModalOpen} onClose={closeModal}>
            {modalContent && (
                <div className="community-modal-content">
                    <img src={modalContent.logo} alt={`${modalContent.name} logo`} className="modal-logo" />
                    <h3>{modalContent.name}</h3>
                    <p>{modalContent.description}</p>
                </div>
            )}
        </Modal>
    </section>
  );
};


export default NonTech;