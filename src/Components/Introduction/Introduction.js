import React, { useState } from 'react';
import './Introduction.css';
import Modal from '../Modal/Modal';
import { FaDownload } from 'react-icons/fa'; // Added icon import

const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    // CV link from the old component is now here
    const cvUrl = `https://drive.google.com/file/d/1p2OIaUxBBGs_Cy4Hv1I0DndbQDdnD_Ui/view`;

    return (
        <>
            <section id="intro" className="intro-container">
                 <h1 className="intro-name">Hi, I'm Mohnish</h1>
                 <p className="intro-tagline">Passionate about all things tech.</p>
    
                 <div className="intro-buttons-container">
                    <button className="know-more-button" onClick={openModal}>
                       About Me
                    </button>
                    <a href={cvUrl} className="download-cv-button" target="_blank" rel="noopener noreferrer">
                        <FaDownload />
                        <span>Download CV</span>
                    </a>
                </div>
            </section>

            <Modal show={isModalOpen} onClose={closeModal}>
                <div className="about-me-modal">
                    <h2>About Me</h2>
                    <p>This is where you can write a more detailed paragraph about yourself. Talk about your journey into technology, your passion for cybersecurity and development, and what motivates you. You can mention key experiences or your philosophy on problem-solving and continuous learning.</p>
                </div>
            </Modal>
        </>
    );
};

export default Introduction;