import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctor from '../Assets/doctor.avif';
import ltrenzlogo from '../Assets/ltrenzlogo.jpeg';
import './main-content.css';

function MainPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        setLoggedIn(true);
        navigate('/dashboard');
      } else {
        setLoggedIn(false);
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      setLoggedIn(false);
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="main-bg">
      <div className="header">
        <div className="logo-section">
          <img src={ltrenzlogo} alt="Lifetrenz Logo" className="logo-img" />
        </div>
        <div className="cloudnine-text">Cloudnine</div>
      </div>
      <div className="color-blocks">
        <div className="block orange"></div>
        <div className="block blue"></div>
      </div>
      <div className="main-content">
        <div className="left-section">
          <img src={doctor} alt="Doctor" className="main-img" />
          <div className="platform-title">
            <div className="lifetrenz">Lifetrenz</div>
            <div className="ehr">Pharmacy EHR</div>
          </div>
        </div>
        <div className="right-section">
          <div className="login-box">
            <div className="login-title">Pharamacy EHR </div>
            <form onSubmit={handleSubmit}>
              <label>
                Username*<br />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="support@lifetrenz.com"
                />
              </label>
              <br />
              <label>
                Password*<br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                />
              </label>
              <br />
              <label className="remember-me">
                <input type="checkbox" /> Remember Me
              </label>
              <br />
              <div className="login-buttons">
                <button type="submit">Login</button>
                <button type="button">Demo/Training</button>
              </div>
              {/* <div className="login-links">
                <a href="#">Change License Key</a> | <a href="#">Forgot Password ?</a>
              </div> */}
            </form>
            <div className="footer">©dWise Healthcare IT Solutions Pvt. Ltd.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
