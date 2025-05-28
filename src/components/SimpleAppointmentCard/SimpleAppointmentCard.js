import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="simple-card">
    <span className="simple-icon">{/* icon placeholder */}</span>
    <div className="simple-info">
      <div className="simple-title">{title}</div>
      <div className="simple-time">{time}</div>
    </div>
  </div>
);

export default SimpleAppointmentCard;
