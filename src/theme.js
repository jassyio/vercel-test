import React, { createContext, useState, useEffect } from 'react';

// Create the Theme context
export const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme; // Apply theme class to the document element
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
