import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import UserMedicalInfo from './pages/UserMedicalInfo';
import PatientDataDisplay from './components/PatientDataDisplay';
import EmergencyAlerts from './pages/EmergencyAlerts';
import EmergencyContact from './pages/EmergencyContact';
import SymptomChecker from './pages/SymptomChecker';
import HealthLog from './pages/HealthLog'; 
import HealthResources from './pages/HealthResources';
import MedicineLocator from './pages/MedicineLocator';
import Chatbot from './pages/Chatbot';
import DietSuggestions from './pages/DietSuggestions';
import Notifications from './pages/Notifications';
import NotFound from './pages/NotFound'; // Import NotFound component
import './styles/App.css';

function App() {
  // Removed userMedicalData state since it's unused
  // const [userMedicalData, setUserMedicalData] = useState(null);

  const handleMedicalInfoSubmit = (data) => {
    // Placeholder function if you decide to implement functionality later
    console.log('User Medical Information submitted:', data);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/user-medical-info" element={<UserMedicalInfo onSubmit={handleMedicalInfoSubmit} />} />
          <Route path="/patient-data" element={<PatientDataDisplay />} />
          <Route path="/emergency-alerts" element={<EmergencyAlerts />} />
          <Route path="/emergency-contact" element={<EmergencyContact />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/health-log" element={<HealthLog />} />
          <Route path="/health-resources" element={<HealthResources />} />
          <Route path="/medicine-locator" element={<MedicineLocator />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/diet-suggestions" element={<DietSuggestions />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Not Found route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
