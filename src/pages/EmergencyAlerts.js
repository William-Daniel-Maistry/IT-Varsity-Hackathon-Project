import React from 'react';
import './EmergencyAlerts.css';

const EmergencyAlerts = () => {
  return (
    <div className="emergency-alerts">
      <h1>Emergency Alerts</h1>
      <p>In case of an emergency, please contact the following hotlines:</p>
      <ul className="hotlines">
        <li><strong>Emergency Services:</strong> 911</li>
        <li><strong>Health Hotline:</strong> 1-800-123-4567</li>
        <li><strong>Mental Health Support:</strong> 1-800-987-6543</li>
        <li><strong>Poison Control:</strong> 1-800-222-1222</li>
        <li><strong>Disaster Relief:</strong> 1-800-456-7890</li>
      </ul>

      <h2>What to Do in an Emergency</h2>
      <p>Here are some important steps to keep in mind during an emergency:</p>
      <ul className="emergency-tips">
        <li><strong>Stay Calm:</strong> Take a deep breath and try to remain calm.</li>
        <li><strong>Assess the Situation:</strong> Determine the nature and severity of the emergency.</li>
        <li><strong>Call for Help:</strong> Use the emergency hotline to get assistance as needed.</li>
        <li><strong>Provide Details:</strong> Clearly explain the situation to the operator, including your location and any injuries.</li>
        <li><strong>Follow Instructions:</strong> Listen carefully and follow any directions given by emergency personnel.</li>
        <li><strong>Move to Safety:</strong> If possible, relocate to a safe area and avoid any hazards.</li>
      </ul>

      <h2>Stay Updated</h2>
      <p>Stay tuned for any alerts or updates regarding health emergencies, weather, or safety concerns:</p>
      <div className="updates">
        <p><strong>Alert:</strong> A flu outbreak has been reported in the area. Please take precautions!</p>
        <p><strong>Alert:</strong> Severe weather warning: thunderstorms expected. Stay indoors and avoid travel.</p>
        <p><strong>Tip:</strong> Get your flu vaccine to protect yourself and others during flu season.</p>
      </div>

      <h2>Emergency Preparedness Resources</h2>
      <p>Consider preparing an emergency kit with the following items:</p>
      <ul className="preparedness-kit">
        <li>First aid supplies</li>
        <li>Flashlights and extra batteries</li>
        <li>Non-perishable food and water (3-day supply)</li>
        <li>Personal medications</li>
        <li>Important documents and emergency contact information</li>
        <li>Warm clothing and blankets</li>
        <li>Portable phone chargers</li>
        <li>Personal hygiene items (sanitizer, tissues, etc.)</li>
      </ul>

      <h2>Communication Tips During Emergencies</h2>
      <p>Effective communication can make a difference in an emergency:</p>
      <ul className="communication-tips">
        <li><strong>Text Instead of Call:</strong> Texting may be more reliable than calling during network congestion.</li>
        <li><strong>Use Social Media:</strong> Check official channels for real-time updates on emergencies.</li>
        <li><strong>Share Your Location:</strong> If possible, share your real-time location with family members.</li>
        <li><strong>Battery Conservation:</strong> Conserve phone battery by limiting usage and reducing screen brightness.</li>
      </ul>
    </div>
  );
};

export default EmergencyAlerts;
