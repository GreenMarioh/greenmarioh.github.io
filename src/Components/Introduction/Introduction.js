import React, { useState } from 'react';
import './Introduction.css';
import Modal from '../Modal/Modal';
import { FaDownload } from 'react-icons/fa'; // Added icon import

const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    // CV link from the old component is now here
    const cvUrl = `https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID_HERE`;

    return (
        <>
            <section id="intro" className="intro-container">
                <h1>Mohnish Kumar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
                {/* New container to hold both buttons */}
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