import React, { useState } from 'react';
import './Notifications.css'; 

const Notifications = () => {
  
  const notifications = [
    { id: 1, message: "Your doctor's appointment is scheduled for tomorrow at 3 PM.", type: 'appointment' },
    { id: 2, message: "Don't forget to take your medication at 8 AM.", type: 'reminder' },
    { id: 3, message: "Your test results are ready to view.", type: 'update' },
    { id: 4, message: "You have a new message from your doctor.", type: 'message' },
    { id: 5, message: "Your prescription is ready for pickup.", type: 'reminder' },
    { id: 6, message: "Don't forget to schedule your next health checkup.", type: 'appointment' },
  ];

  const [filter, setFilter] = useState('all');

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    return notification.type === filter;
  });

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <div className="filter-container">
        <label htmlFor="filter">Filter by type:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="appointment">Appointments</option>
          <option value="reminder">Reminders</option>
          <option value="update">Updates</option>
          <option value="message">Messages</option>
        </select>
      </div>
      <ul className="notifications-list">
        {filteredNotifications.map((notification) => (
          <li key={notification.id} className={`notification-item ${notification.type}`}>
            <span className="notification-icon">🔔</span>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
