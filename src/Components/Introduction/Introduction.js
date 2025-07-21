import React, { useState } from 'react';
import './Introduction.css';
import Modal from '../Modal/Modal';
import { FaDownload } from 'react-icons/fa'; // Added icon import

const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    // CV link from the old component is now here
    const cvUrl = `https://drive.google.com/file/d/1BOXlBtc7U3EzD-iXKECnTPOvz15ZttRW/view`;

    return (
        <>
            <section id="intro" className="intro-container">
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
            </section>

            <Modal show={isModalOpen} onClose={closeModal}>
               <div className="about-me-modal">
  <h3>About Me</h3>
  <p>
    Hi, I'm Mohnish — currently in my pre-final year, pursuing a major in Computer Science. 
    I'm passionate about all things tech — whether it's solving problems, building cool stuff, breaking things, or fixing broken ones.
  </p>
  <p>
    I'm currently working on strengthening my understanding of Data Structures and Algorithms and learning how to apply them in advanced problem-solving. 
    I've also recently started exploring the world of competitive programming.
  </p>
  <p>
    Beyond that, I'm fascinated by cybersecurity — especially finding loopholes, using tools in unconventional ways, and generally understanding how things can break. :`)
    <br />
    Some other areas I'm eager to explore: Machine Learning and Databases.
  </p>

  <h3>Where Am I?</h3>
  <p>
    I'm currently pursuing my bachelor's degree at Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India.
  </p>

  <h3>What Else?</h3>
  <p>
   Over the years, I have contributed to the safety and well-being of online communities through volunteer moderation. 
    I’ve collaborated with well-known organizations in the gaming industry, managing community spaces across Twitch, YouTube, and Discord.
  </p>

  <h3>Not Coding?</h3>
  <p>
    Even when I'm not coding, I spend plenty of time in front of the screen — gaming or watching sports (including esports!). 
    You might catch me yelling at missed Arsenal penalties, an RCB no-ball, or criticizing Sentinels’ lineups.
    <br />
    I also listen to a lot of music — the genre doesn’t matter much as long as it’s not heavy metal (sorry, metalheads). 
    Oh, and feel free to say hi if you ever spot me at the gym!
  </p>
</div>

            </Modal>
        </>
    );
};

export default Introduction;