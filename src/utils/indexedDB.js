// src/utils/indexedDB.js

const STORE_NAME = 'patients'; // Constant for store name

// Open the IndexedDB database
const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('PatientDataDB', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            // Create an object store for patient data if it doesn't exist
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject('Database error: ' + event.target.errorCode);
        };
    });
};

// Function to add patient data
export const addPatientData = async (patient) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(patient);

        request.onsuccess = () => {
            resolve('Patient data added successfully!');
        };

        request.onerror = (event) => {
            reject('Error adding patient data: ' + event.target.errorCode);
        };
    });
};

// Function to retrieve all patient data
export const getPatientData = async () => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            console.error('Error retrieving patient data:', event.target.errorCode); // Log the error
            reject('Error retrieving patient data: ' + event.target.errorCode);
        };
    });
};

// Function to add user medical data (if needed for a different store)
export const addUserMedicalData = async (data) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite'); // Change to appropriate store if necessary
        const store = transaction.objectStore(STORE_NAME); // Change to 'medicalInfo' if you want to use a different store
        const request = store.add(data);

        request.onsuccess = () => {
            console.log('User medical data added to IndexedDB');
            resolve('User medical data added successfully!');
        };

        request.onerror = (event) => {
            reject('Error adding user medical data: ' + event.target.errorCode);
        };
    });
};
