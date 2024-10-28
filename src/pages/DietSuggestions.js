import React, { useState } from 'react';
import './DietSuggestions.css';
import axios from 'axios';

const DietSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [notification, setNotification] = useState('');
  const [dietType, setDietType] = useState('');

  const handleDietSuggestion = (type) => {
    setDietType(type);
    const dietPlan = {
      vegetarian: [
        'Salad with Quinoa',
        'Vegetable Stir-fry with Tofu',
        'Fruit Smoothie with Spinach',
        'Stuffed Bell Peppers',
        'Chickpea Curry',
      ],
      vegan: [
        'Quinoa Bowl with Avocado',
        'Chickpea Salad with Lemon Dressing',
        'Vegan Tacos with Lentils',
        'Zucchini Noodles with Marinara',
        'Vegan Buddha Bowl',
      ],
      keto: [
        'Grilled Chicken with Broccoli',
        'Avocado Salad with Feta',
        'Cheese Omelette with Spinach',
        'Zucchini Lasagna',
        'Keto-Friendly Beef Stir-fry',
      ],
      paleo: [
        'Grilled Salmon with Asparagus',
        'Sweet Potato Hash with Eggs',
        'Zucchini Noodles with Pesto',
        'Coconut Curry Shrimp',
        'Paleo Chicken Salad',
      ],
      mediterranean: [
        'Greek Salad with Feta',
        'Hummus with Veggie Sticks',
        'Mediterranean Quinoa Salad',
        'Grilled Chicken Gyro',
        'Pita with Tzatziki Sauce',
      ],
    };

    const selectedSuggestions = dietPlan[type] || [];
    setSuggestions(selectedSuggestions);
  };

  const handleNotifyDoctor = async () => {
    try {
      await axios.post('/api/notify-doctor', { dietType });
      setNotification('Doctor has been notified about your dietary preferences.');
    } catch (error) {
      console.error('Error notifying doctor:', error);
      setNotification('Failed to notify the doctor.');
    }
  };

  return (
    <div className="diet-suggestions-container">
      <h2>Diet Suggestions</h2>
      <p>Select a diet type to see suggestions:</p>
      <div className="diet-buttons">
        <button onClick={() => handleDietSuggestion('vegetarian')}>Vegetarian</button>
        <button onClick={() => handleDietSuggestion('vegan')}>Vegan</button>
        <button onClick={() => handleDietSuggestion('keto')}>Keto</button>
        <button onClick={() => handleDietSuggestion('paleo')}>Paleo</button>
        <button onClick={() => handleDietSuggestion('mediterranean')}>Mediterranean</button>
      </div>
      <div className="suggestions">
        <h3>Your Suggestions:</h3>
        <ul>
          {suggestions.length > 0 ? (
            suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No suggestions available. Please select a diet type.</li>
          )}
        </ul>
      </div>
      <button onClick={handleNotifyDoctor} disabled={!dietType} className="notify-button">Notify Doctor</button>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
};

export default DietSuggestions;
