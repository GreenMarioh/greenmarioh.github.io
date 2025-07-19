import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <header className="banner">
      <nav>
        <a href="#intro">Home</a>
        <a href="#tech">Tech</a>
        <a href="#non-tech">Creative & Community</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Banner;