import React, { useContext } from 'react';
import './Skills.css';
import Tetris from './tetris';
import { Theme } from './theme';

function Skills() {
  const { theme } = useContext(Theme);

  return (
    <section id="skills" className={`skills ${theme}`}>
      <h2>Skills</h2>
      <p>My skills include HTML, CSS, JavaScript, Node.js, React, jQuery, MySQL, NoSQL, Git and GitHub. I also have experience in Python AI and am a continuous learner to stay updated with new frameworks and tools.</p>
      <Tetris />
    </section>
  );
}

export default Skills;
