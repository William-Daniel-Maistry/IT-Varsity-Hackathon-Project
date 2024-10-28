import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p className="intro">
        We are committed to providing quality telemedicine services that enhance healthcare accessibility and empower patients.
      </p>
      <section className="mission-section">
        <h3>Our Mission</h3>
        <p>
          Our mission is to bridge the gap in healthcare by providing reliable, accessible, and affordable telemedicine services to all. 
          We strive to improve the overall health and well-being of our patients through innovative technology and dedicated care.
        </p>
      </section>
      <section className="services-section">
        <h3>Our Services</h3>
        <ul>
          <li>Virtual Consultations</li>
          <li>Remote Patient Monitoring</li>
          <li>Access to Health Resources</li>
          <li>Emergency Assistance</li>
          <li>Health Education and Awareness</li>
        </ul>
      </section>
      <section className="team-section">
        <h3>Meet Our Team</h3>
        <p>
          Our dedicated team of healthcare professionals is here to provide you with the best possible care. 
          With years of experience in various medical fields, we ensure that you receive comprehensive support for your health needs.
        </p>
      </section>
    </div>
  );
}

export default About;
