import React, { useContext } from 'react';
import './Projects.css';
import Tetris from './tetris';
import { Theme } from './theme';

function Projects() {
  const { theme } = useContext(Theme);

  return (
    <section id="projects" className={`projects ${theme}`}>
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>E-commerce Web App</h3>
          <p>A fully developed online gym apparel shop made with React, Node.js, MongoDB, and Tailwind CSS. Hosted on Vercel. <a href="your-git-link">GitHub Link</a></p>
        </div>
        <div className="project-item">
          <h3>Weather Forecast Web App</h3>
          <p>A weather forecast web app made with React, CSS, and the OpenWeather API, localized in several languages.</p>
        </div>
        <div className="project-item">
          <h3>Football Website</h3>
          <p>A football website made with React, Node.js, and MySQL.</p>
        </div>
        <div className="project-item">
          <h3>Dice Game</h3>
          <p>A dice game made with jQuery and CSS, hosted and working.</p>
        </div>
      </div>
      <Tetris />
    </section>
  );
}

export default Projects;
