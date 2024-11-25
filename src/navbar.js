// src/Navbar.js
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Theme } from './theme'; // Adjust import based on your folder structure
import './Navbar.css';

const Navbar = () => {
  const { theme, changeTheme } = useContext(Theme);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    closeDropdown();
  };

  useEffect(() => {
    if (dropdownOpen) {
      const timer = setTimeout(() => {
        closeDropdown();
      }, 3000); // Hide dropdown after 2 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className={`nav ${theme}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/certificates">Certificates</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="dropdown">
          <button
            className="dropdown-button"
            onClick={toggleDropdown}
          >
            Theme
          </button>
          {dropdownOpen && (
            <ul
              className="dropdown-menu open"
              ref={dropdownRef}
              onMouseLeave={closeDropdown}
            >
              <li><button onClick={() => handleThemeChange('light')}>Light Mode</button></li>
              <li><button onClick={() => handleThemeChange('dark')}>Dark Mode</button></li>
              <li><button onClick={() => handleThemeChange('classic')}>Classic Mode</button></li>
              <li><button className="color-mode" onClick={() => handleThemeChange('color')}>Color Mode</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
