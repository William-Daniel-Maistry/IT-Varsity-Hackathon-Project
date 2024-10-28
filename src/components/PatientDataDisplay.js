import React, { useEffect, useState } from 'react';
import { getPatientData } from '../utils/indexedDB';
import './PatientDataDisplay.css'; 

const PatientDataDisplay = () => {
    const [patients, setPatients] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 

    const fetchPatients = async () => {
        try {
            const data = await getPatientData();
            setPatients(data);
        } catch (err) {
            setError('Error retrieving patient data. Please try again later.');
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    if (loading) {
        return <p>Loading patient data...</p>; 
    }

    if (error) {
        return <p className="error-message">{error}</p>; 
    }

    return (
        <div className="patient-data-container">
            <h2>Patient Data</h2>
            {patients.length > 0 ? (
                <ul className="patient-list">
                    {patients.map((patient) => (
                        <li key={patient.id} className="patient-item">
                            <strong>Name:</strong> {patient.name}<br />
                            <strong>Age:</strong> {patient.age}<br />
                            <strong>Gender:</strong> {patient.gender}<br />
                            <strong>Contact:</strong> {patient.contact}<br /> 
                            <strong>Medical History:</strong> {patient.medicalHistory}<br /> 
                            <strong>Treatment Plan:</strong> {patient.treatmentPlan} 
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No patient data available.</p>
            )}
        </div>
    );
};

export default PatientDataDisplay;
