import React from 'react';
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <p>Here are some useful links to get you back on track:</p>
        <ul className="suggestions-list">
          <li><a href="/">🏠 Home</a></li>
          <li><a href="/health-resources">📚 Health Resources</a></li>
          <li><a href="/medicine-locator">💊 Medicine Locator</a></li>
          <li><a href="/health-insights">📈 Health Insights</a></li>
          <li><a href="/contact">✉️ Contact Us</a></li>
        </ul>
        <p>If you believe this is an error, please contact support.</p>
      </div>
      <img
        src="https://via.placeholder.com/600x400" 
        alt="Not Found Illustration"
        className="not-found-image"
      />
    </div>
  );
};

export default NotFound;
