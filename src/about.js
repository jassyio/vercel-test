import React, { useContext } from 'react';
import './About.css';
import { Theme } from './theme'; // Adjust import based on your folder structure
import Tetris from './tetris'; // Assuming Tetris component is already created

const About = () => {
  const { theme } = useContext(Theme); // Access current theme from context

  return (
    <div className={`about ${theme}`}>
      <h2>About Me</h2>
      <p>
        I am a dedicated developer with a passion for building high-quality web applications. My goal is to deliver innovative and reliable solutions for my clients.
      </p>
      {theme !== 'classic' && <Tetris />} {/* Show Tetris if theme is not classic */}
    </div>
  );
};

export default About;
