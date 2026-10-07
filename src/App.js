import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import FeaturedWork from './Components/FeaturedWork/FeaturedWork';
import Experience from './Components/Experience/Experience';
import CompetitivePrograms from './Components/CompetitivePrograms/CompetitivePrograms';
import MoreProjects from './Components/MoreProjects/MoreProjects';
import TechnicalCapabilities from './Components/TechnicalCapabilities/TechnicalCapabilities';
import ProblemSolving from './Components/ProblemSolving/ProblemSolving';
import Leadership from './Components/Leadership/Leadership';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { initPortfolioMotion } from './utils/motion';
import './App.css';

function App() {
  useEffect(() => {
    const cleanupMotion = initPortfolioMotion();
    return () => {
      if (cleanupMotion) cleanupMotion();
    };
  }, []);
  return (
    <div className="portfolio-app">
      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <Experience />
        <CompetitivePrograms />
        <MoreProjects />
        <TechnicalCapabilities />
        <ProblemSolving />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;