import React, { useState } from 'react';
import './NonTech.css';
import Modal from '../Modal/Modal';
// Import icons & logos
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobelightroom } from "react-icons/si";

// Make sure to add your logo files in the public/assets/logos folder
// Example: public/assets/logos/riot.png
const communityLogos = {
    riot: '/assets/logos/riot.png',
    glorious: '/assets/logos/glorious.png',
    ssg: '/assets/logos/ssg.png',
    gfg: '/assets/logos/gfg.png',
    cybervault: '/assets/logos/cybervault.png',
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
    name: "Riot Games (VALORANT)",
    logo: communityLogos.riot,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managed community events and feedback for VALORANT."
  },
  {
    name: "Glorious PCMR",
    logo: communityLogos.glorious,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Moderated forums and provided user support."
  },
  {
    name: "SpaceStation Gaming",
    logo: communityLogos.ssg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Organized online tournaments and streams."
  },
];

const clubData = [
  {
    name: "GeeksForGeeks Student Chapter",
    logo: communityLogos.gfg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hosted coding workshops and hackathons."
  },
  {
    name: "CyberVault",
    logo: communityLogos.cybervault,
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
                </div>
            ))}
        </div>
    );

  return (
    <section id="non-tech" className="non-tech-container">
      <h2>Creative & Community</h2>

      <div className="subsection">
          <h3>Creative Suite</h3>
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

// This line MUST export the function, not a data array.
export default NonTech;