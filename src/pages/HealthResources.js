import React from 'react';
import './HealthResources.css'; 
import { FaHeart, FaLeaf, FaDumbbell, FaBrain, FaUtensils } from 'react-icons/fa';

const resources = [
  {
    title: 'Understanding Blood Pressure',
    description: 'Learn about what blood pressure is and how to manage it.',
    link: 'https://www.heart.org/en/health-topics/high-blood-pressure',
    icon: <FaHeart />
  },
  {
    title: 'Healthy Eating Tips',
    description: 'Discover tips for maintaining a balanced diet and a healthier lifestyle.',
    link: 'https://www.choosemyplate.gov/eat-healthy',
    icon: <FaUtensils />
  },
  {
    title: 'Exercise for Beginners',
    description: 'Get started with exercises suitable for beginners to build strength and stamina.',
    link: 'https://www.cdc.gov/physicalactivity/basics/index.htm',
    icon: <FaDumbbell />
  },
  {
    title: 'Mental Health Awareness',
    description: 'Understand the importance of mental health and how to maintain it.',
    link: 'https://www.mentalhealth.gov/',
    icon: <FaBrain />
  },
  {
    title: 'Managing Stress Naturally',
    description: 'Explore natural ways to manage and reduce stress.',
    link: 'https://www.nimh.nih.gov/health/publications/stress',
    icon: <FaLeaf />
  },

];

const HealthResources = () => {
  return (
    <div className="health-resources-container">
      <h1 className="resources-title">Health Education Resources and Tips</h1>
      <ul className="resources-list">
        {resources.map((resource, index) => (
          <li key={index} className="resource-item">
            <div className="resource-icon">{resource.icon}</div>
            <h2 className="resource-title">{resource.title}</h2>
            <p className="resource-description">{resource.description}</p>
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resource-link"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthResources;
