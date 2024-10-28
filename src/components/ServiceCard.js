import React from 'react';
import './ServiceCard.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
