import React, { useState } from 'react';
import './Sidebar.css';
import {
  FiGrid, FiClock, FiCalendar, FiCheckSquare,
  FiBarChart2, FiFilter, FiMessageCircle,
  FiHelpCircle, FiSettings, FiMenu, FiX
} from 'react-icons/fi';

const navigationLinks = [
  { label: "Dashboard", icon: <FiGrid /> },
  { label: "History", icon: <FiClock /> },
  { label: "Calendar", icon: <FiCalendar /> },
  { label: "Appointments", icon: <FiCheckSquare /> },
  { label: "Statistics", icon: <FiBarChart2 /> },
  { label: "Tests", icon: <FiFilter /> },
  
  { label: "Chat", icon: <FiMessageCircle /> },
  { label: "Support", icon: <FiHelpCircle /> },
  { label: "Setting", icon: <FiSettings /> }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

         <span className="header-title">
        <span className="title-health" style={{ color: '#04c4c4' }}>Health</span>
        <span className="title-care" style={{ color: '#2a3a4b' }}>Care.</span>
      </span>

        <div className="sidebar-general">General</div>
        <nav className="sidebar-nav-links">
          {navigationLinks.map((link) => (
            <div
              key={link.label}
              className={`sidebar-link ${link.label === 'Dashboard' ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{link.icon}</span>
              <span className="sidebar-label">{link.label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
