import React, { useState } from 'react';
import './Introduction.css';
import Modal from '../Modal/Modal';
import { FaDownload, FaChevronDown } from 'react-icons/fa'; // Added Chevron icon

const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const cvUrl = `https://drive.google.com/file/d/1BOXlBtc7U3EzD-iXKECnTPOvz15ZttRW/view`;

    return (
        <>
            <section id="intro" className="intro-container">
                 {/* This wrapper helps with the spotlight effect layout */}
                 <div className="intro-content">
                    <h1 className="intro-name">Hi, I'm Mohnish</h1>
                    <p className="intro-tagline">Passionate about all things tech. Trying to figure out how things work;
                        from logical structures in code to social structures in communities.
                    </p>
        
                    <div className="intro-buttons-container">
                        <button className="know-more-button" onClick={openModal}>
                        About Me
                        </button>
                        <a href={cvUrl} className="download-cv-button" target="_blank" rel="noopener noreferrer">
                            <FaDownload />
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="scroll-indicator">
                    <span>Explore</span>
                    <FaChevronDown className="bounce" />
                </div>
            </section>
            
            {/* Modal code remains the same... */}
            <Modal show={isModalOpen} onClose={closeModal}>
                {/* ... existing modal content ... */}
            </Modal>
        </>
    );
};

export default Introduction;