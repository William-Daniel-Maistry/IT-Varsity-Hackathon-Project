import React, { useState } from 'react';
import './HealthDataForm.css';

const HealthDataForm = () => {
  const [healthData, setHealthData] = useState({
    height: '',
    weight: '',
    bloodPressure: '',
    heartRate: '',
    cholesterol: '',
    glucoseLevel: '',
    oxygenSaturation: '',
    temperature: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthData({ ...healthData, [name]: value });
  };

  const validateData = () => {
    const { height, weight, bloodPressure, heartRate, cholesterol, glucoseLevel, oxygenSaturation, temperature } = healthData;
    if (!height || !weight || !bloodPressure || !heartRate || !cholesterol || !glucoseLevel || !oxygenSaturation || !temperature) {
      return 'All fields are required.';
    }
    if (Object.values(healthData).some(value => isNaN(value))) {
      return 'Please enter valid numeric values.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateData();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');

    const apiEndpoint = 'https://your-api-endpoint.com/health-data';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(healthData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSuccessMessage('Health data submitted successfully!');
      setHealthData({
        height: '', weight: '', bloodPressure: '', heartRate: '', cholesterol: '', glucoseLevel: '', oxygenSaturation: '', temperature: ''
      }); // Reset the form
    } catch (error) {
      setError('Error submitting health data. Please try again.');
    }
  };

  return (
    <div className="health-data-form-container">
      <h2>Health Data Collection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height (cm):</label>
          <input type="number" name="height" value={healthData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={healthData.weight} onChange={handleChange} />
        </div>
        <div>
          <label>Blood Pressure (mmHg):</label>
          <input type="text" name="bloodPressure" value={healthData.bloodPressure} onChange={handleChange} />
        </div>
        <div>
          <label>Heart Rate (bpm):</label>
          <input type="number" name="heartRate" value={healthData.heartRate} onChange={handleChange} />
        </div>
        <div>
          <label>Cholesterol (mg/dL):</label>
          <input type="number" name="cholesterol" value={healthData.cholesterol} onChange={handleChange} />
        </div>
        <div>
          <label>Glucose Level (mg/dL):</label>
          <input type="number" name="glucoseLevel" value={healthData.glucoseLevel} onChange={handleChange} />
        </div>
        <div>
          <label>Oxygen Saturation (%):</label>
          <input type="number" name="oxygenSaturation" value={healthData.oxygenSaturation} onChange={handleChange} />
        </div>
        <div>
          <label>Body Temperature (°C):</label>
          <input type="number" step="0.1" name="temperature" value={healthData.temperature} onChange={handleChange} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default HealthDataForm;
