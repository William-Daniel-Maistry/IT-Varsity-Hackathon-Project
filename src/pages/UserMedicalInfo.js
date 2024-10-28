import React, { useState } from 'react';
import './UserMedicalInfo.css';
import { addPatientData } from '../utils/indexedDB'; 

function UserMedicalInfo({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    medicalConditions: '',
    medications: '',
    allergies: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    healthInsuranceProvider: '',
    insurancePolicyNumber: '',
  });
  
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    onSubmit(formData); 
    
    try {
      await addPatientData(formData); 
      setMessage('User medical information submitted successfully!'); 
      setFormData({ 
        name: '',
        age: '',
        gender: '',
        medicalConditions: '',
        medications: '',
        allergies: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        healthInsuranceProvider: '',
        insurancePolicyNumber: '',
      });
    } catch (error) {
      setMessage('Error saving data: ' + error); 
    }
  };

  return (
    <div className="medical-info-container">
      <h1>User Medical Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="required">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
          min={0}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="medicalConditions">Medical Conditions:</label>
        <textarea
          name="medicalConditions"
          id="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
          placeholder="List any chronic or acute medical conditions."
        />

        <label htmlFor="medications">Medications:</label>
        <textarea
          name="medications"
          id="medications"
          value={formData.medications}
          onChange={handleChange}
          placeholder="List all medications you are currently taking."
        />

        <label htmlFor="allergies">Allergies:</label>
        <textarea
          name="allergies"
          id="allergies"
          value={formData.allergies}
          onChange={handleChange}
          placeholder="List any known allergies."
        />

        <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
        <input
          type="text"
          name="emergencyContactName"
          id="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleChange}
          placeholder="Full name of your emergency contact"
        />

        <label htmlFor="emergencyContactPhone">Emergency Contact Phone:</label>
        <input
          type="tel"
          name="emergencyContactPhone"
          id="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={handleChange}
          placeholder="Phone number of your emergency contact"
        />

        <label htmlFor="healthInsuranceProvider">Health Insurance Provider:</label>
        <input
          type="text"
          name="healthInsuranceProvider"
          id="healthInsuranceProvider"
          value={formData.healthInsuranceProvider}
          onChange={handleChange}
          placeholder="Your health insurance provider"
        />

        <label htmlFor="insurancePolicyNumber">Insurance Policy Number:</label>
        <input
          type="text"
          name="insurancePolicyNumber"
          id="insurancePolicyNumber"
          value={formData.insurancePolicyNumber}
          onChange={handleChange}
          placeholder="Your insurance policy number"
        />

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display success message */}
    </div>
  );
}

export default UserMedicalInfo;
