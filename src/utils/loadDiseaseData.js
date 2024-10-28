// src/utils/loadDiseaseData.js
import * as XLSX from 'xlsx';

export const loadDiseaseData = async () => {
  try {
    const response = await fetch('/disease_dataset.xlsx'); // Correct path to the file in the public folder
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return jsonData; // Ensure this returns the expected structure
  } catch (error) {
    console.error('Error loading disease data:', error);
    return []; // Return an empty array or handle the error as needed
  }
};
