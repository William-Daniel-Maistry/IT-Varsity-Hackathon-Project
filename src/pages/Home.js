import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>24/7 Virtual Consultations with Certified Doctors</li>
          <li>Real-Time Health Monitoring</li>
          <li>Personalized Health Insights and Tips</li>
          <li>Diet and Lifestyle Recommendations</li>
          <li>Symptom Checker & Health Resources</li>
        </ul>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>General Consultations</h3>
            <p>Get expert advice on a wide range of health issues.</p>
          </div>
          <div className="service-item">
            <h3>Mental Health Support</h3>
            <p>Confidential consultations to support mental well-being.</p>
          </div>
          <div className="service-item">
            <h3>Diet and Nutrition</h3>
            <p>Personalized diet plans to meet your health goals.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <blockquote>"The app has been a lifesaver during busy days!"</blockquote>
          <blockquote>"Easy access to doctors anytime, anywhere."</blockquote>
          <blockquote>"Highly recommend for anyone needing quick medical advice."</blockquote>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/resources">Health Resources</a></li>
          <li><a href="/consultations">Book a Consultation</a></li>
          <li><a href="/contact">Contact Support</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
