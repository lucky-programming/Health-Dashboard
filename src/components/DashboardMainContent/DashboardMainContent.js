import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardMainContent.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import CalendarView from '../CalendarView/CalendarView';

const DashboardMainContent = () => (
  <main className="dashboard-main-content container py-4">
        <div className='row1'>
        <AnatomySection />
        <CalendarView /> 
        </div>
    
  </main>
);

export default DashboardMainContent;
