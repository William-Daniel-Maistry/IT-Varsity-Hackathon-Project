import React, { useState } from 'react';
import './UserMedicalInfo.css'; 
function UserMedicalInfo({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        medicalConditions: '',
        medications: '',
        allergies: '',
    });

    const [successMessage, setSuccessMessage] = useState(''); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.age <= 0) {
            alert("Please enter a valid age."); 
            return;
        }

        
        onSubmit(formData);
        setSuccessMessage("Medical information submitted successfully!"); 
        setFormData({ 
            name: '',
            age: '',
            gender: '',
            medicalConditions: '',
            medications: '',
            allergies: '',
        });
    };

    return (
        <div className="medical-info-container">
            <h1>User Medical Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    name="gender"
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
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                />
                <label htmlFor="medications">Medications:</label>
                <textarea
                    id="medications"
                    name="medications"
                    value={formData.medications}
                    onChange={handleChange}
                />
                <label htmlFor="allergies">Allergies:</label>
                <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>} 
        </div>
    );
}

export default UserMedicalInfo;
