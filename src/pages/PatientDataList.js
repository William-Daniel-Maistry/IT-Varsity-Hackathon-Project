import React, { useEffect, useState } from 'react';
import { getPatientData } from '../utils/indexedDB';
import './PatientDataList.css'; 

function PatientDataList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPatientData(); 
                setPatients(data); 
            } catch (err) {
                setError(err); 
            } finally {
                setLoading(false); 
            }
        };

        fetchData(); 
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); 
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value); 
    };

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedPatients = filteredPatients.sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);
        return sortOrder === 'asc' ? comparison : -comparison;
    });

    if (loading) {
        return <div className="loading-spinner">Loading...</div>; 
    }

    if (error) {
        return <p>{error}</p>; 
    }

    return (
        <div className="patient-data-container">
            <h1>Patient Data</h1>
            <div className="search-sort-container">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <select value={sortOrder} onChange={handleSortChange} className="sort-select">
                    <option value="asc">Sort by Name (A-Z)</option>
                    <option value="desc">Sort by Name (Z-A)</option>
                </select>
            </div>
            <ul className="patient-list">
                {sortedPatients.map((patient) => (
                    <li key={patient.id} className="patient-item">
                        <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}
                        <br />
                        <strong>Conditions:</strong> {patient.conditions.join(', ')}
                        <br />
                        <strong>Last Visit:</strong> {new Date(patient.lastVisit).toLocaleDateString()}
                        {/* Add other fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientDataList;
