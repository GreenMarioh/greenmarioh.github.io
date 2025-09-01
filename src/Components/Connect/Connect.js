import React, { useState } from 'react';
import './Connect.css';

// --- Import Icons ---
import { FaSteam, FaDiscord, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
// 1. SiMonkeytype has been added to the import list
import { SiEpicgames, SiRiotgames, SiX, SiMonkeytype } from 'react-icons/si';

// --- EDITABLE DATA ---
const connectProfiles = [
    { name: "LinkedIn", type: "link", value: "https://linkedin.com/in/mohnish-k", icon: <FaLinkedin /> },
    { name: "GitHub", type: "link", value: "https://github.com/GreenMarioh", icon: <FaGithub /> },
    { name: "Instagram", type: "link", value: "https://instagram.com/hmm.mohnish", icon: <FaInstagram /> },
    { name: "Discord", type: "text", value: "green.mario", icon: <FaDiscord /> },
    // { name: "Riot ID", type: "text", value: "EEE#360", icon: <SiRiotgames /> },
    { name: "Steam", type: "link", value: "https://steamcommunity.com/id/green_mario/", icon: <FaSteam /> },
    // { name: "Epic Games", type: "text", value: "MohnishK360", icon: <SiEpicgames /> },
    { name: "X", type: "link", value: "https://x.com/GreenMarioh", icon: <SiX /> },
    // 2. New object for Monkeytype added
    { name: "Monkeytype", type: "link", value: "https://monkeytype.com/profile/greenmarioh", icon: <SiMonkeytype /> },
];

const Connect = () => {
    const [copiedId, setCopiedId] = useState('');

    const handleCopy = (text, name) => {
        navigator.clipboard.writeText(text);
        setCopiedId(name);
        setTimeout(() => setCopiedId(''), 2000); // Reset feedback after 2 seconds
    };

    return (
        <section id="connect" className="connect-container">
            <h2>Connect & Play</h2>
            <p className="connect-description">
                Here are some of the platforms where I'm active. Feel free to connect, add me for a game, or check out my other profiles.
            </p>
            <div className="connect-grid">
                {connectProfiles.map(profile => {
                    if (profile.type === 'link') {
                        return (
                            <a key={profile.name} href={profile.value} target="_blank" rel="noopener noreferrer" className="connect-card">
                                {profile.icon}
                                <div className="connect-card-text">
                                    <strong>{profile.name}</strong>
                                    <span>View Profile</span>
                                </div>
                            </a>
                        );
                    }
                    return (
                        <div key={profile.name} className="connect-card" onClick={() => handleCopy(profile.value, profile.name)}>
                            {profile.icon}
                            <div className="connect-card-text">
                                <strong>{profile.name}</strong>
                                <span>{copiedId === profile.name ? 'Copied!' : profile.value}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Connect;