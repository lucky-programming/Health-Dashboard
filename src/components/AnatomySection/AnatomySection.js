import React from 'react';
import './AnatomySection.css';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const healthStatusCards = [
  { label: "Lungs", date: "23 May 2025", status: "issue", color: "#F35B5B", icon: "🫁" },
  { label: "Teeth", date: "20 May 2025", status: "healthy", color: "#3DC47E", icon: "🦷" },
  { label: "Bone", date: "18 May 2025", status: "healthy", color: "#3DC47E", icon: "🦴" }
];

const AnatomyHealthCombined = () => (
  <div className="anatomy-health-container">
    <div className="anatomySection">
      <div className="anatomy-img-wrapper">
        <img
          src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg"
          alt="Human Anatomy"
          className="bodyImg"
        />
        <div className="floating-indicator heart">
          ❤️ <span>Healthy Heart</span>
        </div>
        <div className="floating-indicator leg">
          🦵 <span>Healthy Leg</span>
        </div>
      </div>
          <div className="health-cards-container">
      {healthStatusCards.map(card => (
        <div
          className="health-card"
          key={card.label}
          style={{ borderLeft: `5px solid ${card.color}` }}
        >
          <span className="health-icon">{card.icon}</span>
          <div className="health-info">
            <div className="health-label">{card.label}</div>
            <div className="health-date">{card.date}</div>
          </div>
          <span
            className="health-status-dot"
            style={{ background: card.color }}
          ></span>
        </div>
      ))}
    </div>     
    </div> 
    <div className="activity-feed-container">
      <ActivityFeed />
      </div>   
  </div>
  
);

export default AnatomyHealthCombined;
