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
                    <h3>About Me</h3>
                    <p>Hi, I am Mohnish. Currently in pre-final year of my Computer Science major. I like everything tech - be it using tech to solve problems, building stuff, breaking stuff and fixing broken stuff.</p>
                    <p>I'm currently trying to get a better grip on understanding Data Structures and Algorithms and how to use them in advanced problem solving; just getting started in competitive programming.</p>
                    <p>Other than that, I'm also interested in learning cyber security tools; using things in ways they're not intended to and finding loopholes :`)
                      <br></br>  Other Technologies that I'd like to set my foot in: Machine Learning and DataBases.
                    </p>
                    
                    <h3>Where Am I?</h3>
                    <p>Currently doing in bachelors at Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India</p>
                    <h3>What Else?</h3>
                    <p>Over the past few years, I've been involved in safeguarding online community spaces through content moderation. I've been volunteering with big names involved in the online gaming space to help them with moderation of their communites on Twitch, YouTube and Discord.</p>
                    <h3>Not Coding?</h3>
                    <p>Even when I'm not coding, I spend a considerable amount of time behind the screen - either gaming or watching sports (even esports!).<br></br> Sometimes I yell at missed Arsenal penalties, RCB's no ball, or even criticisng Sentinel's lineups.
                    <br></br>I also listen to (a lot) of music. The genre doesn't matter as long as it's not heavy metal (sorry metalheads). Oh and also you're welcome to spot me at the gym if you see me.</p>
                </div>
            </Modal>
        </>
    );
};

export default Introduction;