import React, { useState } from 'react';
import './NonTech.css';
import Modal from '../Modal/Modal';
// Import icons & logos
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobelightroom } from "react-icons/si";


// public/assets/logos/riot.png
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
    description: `<h3>Volunteer Moderator</h3>
  <p><em>August 2020 - October 2020</em></p>
  <p>
    Contributed as a volunteer moderator for <strong>Discord</strong> and <strong>Twitch</strong> platforms, helping maintain a positive and engaging community 
    for Glorious PC Gaming Race. My responsibilities included live chat moderation, enforcing community guidelines, and handling real-time escalations.
  </p>
  <p>
    Though my time with the team was brief, it offered valuable experience in supporting a hardware enthusiast community and engaging with a passionate audience 
    around peripherals, mechanical keyboards, and PC builds.
  </p>`
  },
  {
    name: "Riot Games (VALORANT)",
    logo: communityLogos.riot,
      position: "Community Volunteer", // <-- ADDED
    dates: "May 2020 - Present",
    description: `<h3>Community Volunteer</h3>
  <p><em>2020 – Present</em></p>
  <p>
    Since 2020, I’ve been actively volunteering as a <strong>Community Moderator</strong> across multiple platforms for Riot Games' VALORANT community. 
    This role involves managing large-scale digital communities and ensuring a safe, inclusive, and engaging environment for millions of players and fans.
  </p>
  <p>
    I have moderated and contributed to three major platforms:
    <ul>
      <li><strong>Discord:</strong> 1.5M+ members</li>
      <li><strong>YouTube Live:</strong> Streams with 50K+ concurrent viewers</li>
      <li><strong>Twitch:</strong> Channels with 100K+ concurrent viewers</li>
    </ul>
  </p>
  <p>Currently I am only involved with their Discord community.</p>
  <p>
    As a <strong>Senior Moderator</strong>, I’ve led and mentored a team of volunteer moderators — helping onboard new team members, streamline workflows, 
    and enforce consistent community guidelines. Personally, I’ve resolved over <strong>500+ escalated community issues</strong> involving conflict resolution, 
    content moderation, and communication with Riot’s internal teams.
  </p>
  <p>
    I’ve also collaborated directly with Riot’s community management team to <strong>disseminate official announcements and updates</strong> to over 
    <strong>180K+ community servers</strong>, helping ensure accurate and timely information across platforms.
  </p>
  <p>
    This experience has helped me build strong skills in <strong>community management, real-time moderation, cross-platform communication, 
    and digital conflict resolution</strong> — all while supporting one of the most passionate gaming communities online.
  </p>`
  },
  {
    name: "SpaceStation Gaming",
    logo: communityLogos.ssg,
    position: "Community Moderator", // <-- ADDED
    dates: "October 2020 - May 2021",
    description: `<h3>Volunteer Moderator</h3>
  <p><em>October 2020 - May 2021</em></p>
  <p>
    Volunteered as a community moderator for <strong>Discord</strong> and <strong>Twitch</strong>, helping manage chat flow and promote a safe, friendly environment 
    during live events and day-to-day interactions. 
  </p>
  <p>
    Although a short stint, this opportunity gave me firsthand experience in moderating for a professional esports organization and supporting their vibrant fanbase 
    across gaming titles and events.
  </p>`
  },
];

const clubData = [
  {
    name: "GeeksForGeeks Student Chapter",
    logo: communityLogos.gfg,
      
      position: "Marketing Lead",
    dates: "July 2024 - Present",
    description: `
    <h3>Marketing Lead</h3>
  <p><em>August 2025 – Present</em></p>
  <h3>Administration Member</h3>
  <p><em>2024 – August 2025</em></p>
  <p>
    Currently responsible for leading the Marketing domain for the GeeksForGeeks Student Chapter.
    Previously administration member of the GeeksforGeeks Student Chapter, I coordinate and support various technical initiatives, including 
    <strong>coding workshops, programming competitions,</strong> and non technial work like <strong>promotions, marketing and creatives such as content creation</strong>.
  </p>
  <p>
    My responsibilities also include managing chapter operations, maintaining documentation, and contributing to event planning to create valuable 
    learning opportunities for peers interested in technology.
  </p>`
  },
  {
    name: "CyberVault",
    logo: communityLogos.cybervault,
      position: "Management Member", // <-- ADDED
    dates: "2024 - Present",
    description: ` <h3>Management Member</h3>
  <p><em>2024 – Present</em></p>
  <p>
    At CyberVault, I serve as a management team member, focusing on organizing <strong>cybersecurity workshops, CTF (Capture The Flag) competitions,</strong> 
    and <strong>awareness sessions</strong> aimed at cultivating interest in ethical hacking and infosec.
  </p>
  <p>
    I help facilitate hands-on learning experiences and guide students exploring cybersecurity concepts, tools, and career paths through collaborative events 
    and practical sessions.
  </p>`
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
                 <div className="view-details-cue">
                    <span>View Details &rarr;</span>
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
                    <div className="modal-description" dangerouslySetInnerHTML={{ __html: modalContent.description }} />
                </div>
            )}
        </Modal>
    </section>
  );
};


export default NonTech;