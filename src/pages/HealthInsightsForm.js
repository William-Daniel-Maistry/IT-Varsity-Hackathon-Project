import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '../firebase'; 
import './HealthInsightsForm.css';

const HealthInsightsForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    lifestyle: '',
    diet: '',
    exerciseFrequency: '',
    smokingStatus: '',
    alcoholConsumption: '',
    familyHistory: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateData = () => {
    const { age, gender } = formData;
    if (!age || !gender) {
      return 'Age and gender are required fields.';
    }
    if (isNaN(age) || age < 1) {
      return 'Please enter a valid age.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateData();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const insightsRef = ref(database, 'healthInsights/' + Date.now());
      await set(insightsRef, { ...formData, timestamp: Date.now() });

      setSuccessMessage('Data submitted successfully!');
      setErrorMessage('');
      setFormData({
        age: '',
        gender: '',
        symptoms: '',
        lifestyle: '',
        diet: '',
        exerciseFrequency: '',
        smokingStatus: '',
        alcoholConsumption: '',
        familyHistory: '',
      });
    } catch (error) {
      setErrorMessage('Failed to submit data. Please try again.');
      setSuccessMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="health-insights-form">
      <h2>Health Insights Data Collection</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required min="1" />
      </label>

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label>
        Symptoms:
        <textarea name="symptoms" value={formData.symptoms} onChange={handleChange} maxLength="500" placeholder="Describe any symptoms..." />
      </label>

      <label>
        Lifestyle Habits:
        <textarea name="lifestyle" value={formData.lifestyle} onChange={handleChange} maxLength="500" placeholder="Describe lifestyle habits..." />
      </label>

      <label>
        Dietary Habits:
        <textarea name="diet" value={formData.diet} onChange={handleChange} maxLength="500" placeholder="Describe your diet..." />
      </label>

      <label>
        Exercise Frequency:
        <select name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
          <option value="">Select</option>
          <option value="none">None</option>
          <option value="rarely">Rarely</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </label>

      <label>
        Smoking Status:
        <select name="smokingStatus" value={formData.smokingStatus} onChange={handleChange}>
          <option value="">Select</option>
          <option value="non-smoker">Non-smoker</option>
          <option value="occasional-smoker">Occasional smoker</option>
          <option value="frequent-smoker">Frequent smoker</option>
        </select>
      </label>

      <label>
        Alcohol Consumption:
        <select name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleChange}>
          <option value="">Select</option>
          <option value="none">None</option>
          <option value="occasionally">Occasionally</option>
          <option value="frequently">Frequently</option>
        </select>
      </label>

      <label>
        Family History of Illness:
        <textarea name="familyHistory" value={formData.familyHistory} onChange={handleChange} maxLength="500" placeholder="Any relevant family medical history..." />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default HealthInsightsForm;
