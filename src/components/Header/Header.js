import React from 'react';
import './Header.css';
import { IoIosNotifications } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const Header = () => (
  <header className="header">
    <div className="header-logo-title">
      {/* <span className="header-title">
        <span className="title-health" style={{ color: '#04c4c4' }}>Health</span>
        <span className="title-care" style={{ color: '#2a3a4b' }}>Care.</span>
      </span> */}
    </div>

    <div className="header-search-bar">
      <span className="header-search-icon"><CiSearch /></span>
      <input className="header-input" type="text" placeholder="Search..." />
    </div>

    <div className="header-actions">
      <span className="header-notification">
        <IoIosNotifications />
      </span>
      <span className="header-profile">
        <img
          src="https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107332.jpg?ga=GA1.1.1754355760.1698637197&semt=ais_hybrid&w=740"
          alt="User"
          className="header-avatar"
        />
        <span className="header-name"></span>
      </span>
      <button className="header-add-btn" title="Add"> <span className='plus'>+</span> </button>
    </div>
  </header>
);

export default Header;
