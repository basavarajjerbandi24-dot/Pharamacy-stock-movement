// components/AuthSection.jsx
import React, { useState } from 'react';
import './main-content.css'

function AuthSection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Simulate login check (replace with actual authentication logic)
      if (username === 'admin' && password === 'password') {
        setLoginError('');
        alert('Login successful!');
      } else {
        setLoginError('Invalid username or password');
      }
    }
  };

  return (
    <div className="auth-section">
      <h2>Login</h2>
      {loginError && <div className="login-error">{loginError}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <div className="error-message">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AuthSection;