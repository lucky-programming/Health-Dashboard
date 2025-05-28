import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activityFeed = {
    summary: "3 appointments on this week",
    bars: [60, 80, 40, 100, 70, 30, 90],
  };

  return (
    <section className="activity-section">
      <div className="activity-header">
        <span className="activity-title">Activity</span>
        <span className="activity-summary">{activityFeed.summary}</span>
      </div>
      <div className="bar-chart">
        {activityFeed.bars.map((value, idx) => (
          <div key={idx} className="bar-container">
            <div className="bar"style={{ height: `${(value / 100) * 100}px` }} // assuming max 100 = 100px
             />
             <div className="bar-value">{value}</div>
          </div>
           ))}
       </div>

    </section>
  );
};

export default ActivityFeed;
