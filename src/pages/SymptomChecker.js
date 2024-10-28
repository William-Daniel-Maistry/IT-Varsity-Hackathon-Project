import React, { useEffect, useState } from 'react';
import { loadDiseaseData } from '../utils/loadDiseaseData';
import './SymptomChecker.css';

const SymptomChecker = () => {
  const [diseases, setDiseases] = useState([]);
  const [symptoms, setSymptoms] = useState('');
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadDiseaseData();
        setDiseases(data);
      } catch (error) {
        setError('Failed to load disease data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSymptomChange = (e) => {
    const input = e.target.value;
    setSymptoms(input);
    provideSuggestions(input);
  };

  const provideSuggestions = (input) => {
    const symptomArray = input.toLowerCase().split(',').map(s => s.trim());
    const allSymptoms = diseases.flatMap(disease =>
      disease.primary_symptoms ? disease.primary_symptoms.toLowerCase().split(',').map(sym => sym.trim()) : []
    );
    const uniqueSymptoms = [...new Set(allSymptoms)];
    setSuggestions(uniqueSymptoms.filter(symptom => symptom.startsWith(symptomArray[symptomArray.length - 1])));
  };

  const handleSymptomSearch = () => {
    setIsSearching(true);
    const symptomArray = symptoms.toLowerCase().split(',').map(s => s.trim());
    const results = filterDiseasesBySymptoms(symptomArray);
    setFilteredDiseases(results);
    setIsSearching(false);
  };

  const filterDiseasesBySymptoms = (symptomArray) => {
    return diseases.filter(disease =>
      symptomArray.some(symptom =>
        disease.primary_symptoms && disease.primary_symptoms.toLowerCase().includes(symptom)
      )
    );
  };

  const clearSearch = () => {
    setSymptoms('');
    setFilteredDiseases([]);
    setSuggestions([]);
  };

  if (loading) return <div className="loading-spinner">Loading disease data...</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="symptom-checker-container">
      <h1>Symptom Checker</h1>
      <input
        type="text"
        value={symptoms}
        onChange={handleSymptomChange}
        placeholder="Enter symptoms separated by commas"
        className="symptom-checker-input"
        aria-label="Symptom input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setSymptoms(suggestion)}>{suggestion}</li>
          ))}
        </ul>
      )}
      <div className="button-container">
        <button onClick={handleSymptomSearch} className="symptom-checker-button" disabled={isSearching}>Search</button>
        <button onClick={clearSearch} className="symptom-checker-button">Clear</button>
      </div>

      <div className="results-container">
        <h2>Possible Conditions:</h2>
        {isSearching ? (
          <div className="loading-spinner">Searching...</div>
        ) : (
          <ul>
            {filteredDiseases.length > 0 ? (
              filteredDiseases.map((disease, index) => (
                <li key={index} className="disease-item">
                  <h3>{disease.common_name}</h3>
                  <p>{disease.description}</p>
                  <strong>Primary Symptoms:</strong> {disease.primary_symptoms}
                  <br />
                  <strong>Known Causes:</strong> {disease.known_causes}
                  <br />
                  <strong>Treatment Options:</strong> {disease.treatment_options}
                  <br />
                  <strong>Lifestyle Modifications:</strong> {disease.lifestyle_modifications}
                </li>
              ))
            ) : (
              <p>No conditions found for the entered symptoms.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
