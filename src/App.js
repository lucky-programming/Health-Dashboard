import React from 'react';
import './App.css';
import styles from './styles/AppLayout.module.css';
import { Header, Sidebar, DashboardMainContent } from './components';

function App() {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;