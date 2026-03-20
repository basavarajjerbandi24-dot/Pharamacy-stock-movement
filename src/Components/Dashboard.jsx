import React from 'react';
import { useNavigate } from 'react-router-dom';
import ltrenzlogo from '../Assets/ltrenzlogo.jpeg';
import './main-content.css';

export default function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const openSettings = () => {
    navigate('/pharmacy-settings');
  };

  const openCounterSales = () => {
    navigate('/dashboard');
  };

  const openStockMovement = () => {
    navigate('/dashboard');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <img src={ltrenzlogo} alt="Lifetrenz" className="dashboard-logo-img" />
        </div>
        <div className="dashboard-actions">
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="module-card counter-sales" onClick={openCounterSales}>
          <div className="module-icon">💊</div>
          <div className="module-title">Pharmacy Counter Sales</div>
        </div>
        <div className="module-card stock-movement" onClick={openStockMovement}>
          <div className="module-icon">📦</div>
          <div className="module-title">Pharmacy Stock Movement</div>
        </div>
        <div className="module-card settings" onClick={openSettings}>
          <div className="module-icon">⚙️</div>
          <div className="module-title">Pharmacy Settings</div>
        </div>
      </main>
    </div>
  );
}
