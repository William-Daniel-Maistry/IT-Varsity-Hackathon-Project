import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // lastScrollTop as a dependency to capture its value

  return (
    <footer className={hidden ? 'hidden' : ''}>
      <nav className="footer-nav">
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/emergency-contact">Emergency Contacts</Link>
        <Link to="/health-resources">Health Resources</Link>
      </nav>
      <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
