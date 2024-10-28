import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom'; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); 
  };

  return (
    <header className="header-container">
      <h1 className="header-title">Telemedicine App</h1>
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <ul className="nav-list">
          <li><NavLink to="/" activeClassName="active-link" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link" onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-link" onClick={toggleMenu}>Contact</NavLink></li>
          <li><NavLink to="/user-medical-info" activeClassName="active-link" onClick={toggleMenu}>User Medical Info</NavLink></li>
          <li><NavLink to="/patient-data" activeClassName="active-link" onClick={toggleMenu}>Patient Data</NavLink></li>
          <li><NavLink to="/emergency-alerts" activeClassName="active-link" onClick={toggleMenu}>Emergency Alerts</NavLink></li>
          <li><NavLink to="/emergency-contact" activeClassName="active-link" onClick={toggleMenu}>Emergency Contacts</NavLink></li>
          <li><NavLink to="/symptom-checker" activeClassName="active-link" onClick={toggleMenu}>Symptom Checker</NavLink></li>
          <li><NavLink to="/health-log" activeClassName="active-link" onClick={toggleMenu}>Health Log</NavLink></li>
          <li><NavLink to="/health-resources" activeClassName="active-link" onClick={toggleMenu}>Health Resources</NavLink></li>
          <li><NavLink to="/medicine-locator" activeClassName="active-link" onClick={toggleMenu}>Medicine Locator</NavLink></li>
          <li><NavLink to="/chatbot" activeClassName="active-link" onClick={toggleMenu}>Chatbot</NavLink></li>
          <li><NavLink to="/diet-suggestions" activeClassName="active-link" onClick={toggleMenu}>Diet Suggestions</NavLink></li>
          <li><NavLink to="/notifications" activeClassName="active-link" onClick={toggleMenu}>Notifications</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
