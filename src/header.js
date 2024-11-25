import React, { useContext } from 'react';
import './Header.css';
import Navbar from './navbar';
import { Theme } from './theme';

const Header = () => {
  const { theme } = useContext(Theme);

  return (
    <header className={`header ${theme}`}>
      <div className="tagline">
        <h2>Joseph Njaci the ↓</h2>
        
      </div>
      <h1 className={`header-title ${theme}`}>
        {'Unlimited Developer'.split('').map((char, index) => (
          <span key={index} className={`${theme === 'classic' ? 'classic-font' : ''}`}>
            {char}
            {index === 8 && <span>&nbsp;</span>}
          </span>
        ))}
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
