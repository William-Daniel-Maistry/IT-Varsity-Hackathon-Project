import React from 'react';
import './EmergencyContact.css';

const EmergencyContact = () => {
  const handleCall = (number) => {
    window.open(`tel:${number}`);
  };

  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <ul>
        <li>
          <strong>Emergency Services:</strong> 
          <span>911</span>
          <button onClick={() => handleCall('911')}>Call</button>
        </li>
        <li>
          <strong>Health Hotline:</strong> 
          <span>1-800-123-4567</span>
          <button onClick={() => handleCall('1-800-123-4567')}>Call</button>
        </li>
        <li>
          <strong>Mental Health Support:</strong> 
          <span>1-800-987-6543</span>
          <button onClick={() => handleCall('1-800-987-6543')}>Call</button>
        </li>
        <li>
          <strong>Poison Control:</strong> 
          <span>1-800-222-1222</span>
          <button onClick={() => handleCall('1-800-222-1222')}>Call</button>
        </li>
        <li>
          <strong>Disaster Relief:</strong> 
          <span>1-800-456-7890</span>
          <button onClick={() => handleCall('1-800-456-7890')}>Call</button>
        </li>
        <li>
          <strong>Child Protective Services:</strong> 
          <span>1-800-543-1234</span>
          <button onClick={() => handleCall('1-800-543-1234')}>Call</button>
        </li>
      </ul>

      <h3>Emergency Instructions</h3>
      <p>If you or someone else is in immediate danger, call emergency services right away. For non-urgent help, contact the appropriate hotline above.</p>

      <h3>Tips for Emergency Communication</h3>
      <ul className="communication-tips">
        <li><strong>Stay Calm:</strong> Take deep breaths to stay focused.</li>
        <li><strong>Provide Clear Information:</strong> Mention your location, the nature of the emergency, and any injuries or immediate concerns.</li>
        <li><strong>Follow Instructions:</strong> Listen carefully and do as advised by the emergency operator.</li>
        <li><strong>Share Your Location:</strong> If possible, use your phone’s location-sharing feature to help responders find you faster.</li>
        <li><strong>Keep Contacts Handy:</strong> Have a list of essential contacts saved on your phone and in physical form.</li>
      </ul>

      <h3>Additional Resources</h3>
      <p>Prepare yourself by keeping these resources handy:</p>
      <ul className="additional-resources">
        <li>Emergency Kit Supplies</li>
        <li>Local Shelter Locations</li>
        <li>Medical Facilities Nearby</li>
        <li>Power Banks and Chargers</li>
        <li>Important Medical Records</li>
      </ul>
    </div>
  );
};

export default EmergencyContact;
