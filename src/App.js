import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Certificates from './certificates';
import Footer from './footer';
import Chat from './chat';
import Home from './home';
import Contact from './contact';
import { Theme } from './theme'; // Correct import

function App() {
  const { theme } = useContext(Theme);

  return (
    <div className={`App ${theme}`} data-theme={theme}>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Chat />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
