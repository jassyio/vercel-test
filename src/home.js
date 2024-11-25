import React, { useContext } from 'react';
import './Home.css';
import Tetris from './tetris';
import { Theme } from './theme';

const Home = () => {
  const { theme } = useContext(Theme);

  return (
    <div className={`home ${theme}`}>
      <section className="welcome">
        <h1>Welcome to Unlimited Developer</h1>
        <p className="tagline">A Swiss Knife for All Your Dev Needs!</p>
      </section>
      
      <section className="mission-vision">
        <div className="mission">
          <h2>Mission</h2>
          <p>To deliver innovative and reliable solutions for our clients.</p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>To be a leading provider of top-notch web development services.</p>
        </div>
      </section>
      
      <section className="hire-me">
        <h2>Hire Me</h2>
        <p>Let's work together on your next project! <a href="/contact">Contact me</a> to get started.</p>
      </section>
      
      {theme !== 'classic' && <Tetris />}
    </div>
  );
};

export default Home;
