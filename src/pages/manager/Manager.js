import React, { useState } from 'react';
import { AuthProvider, useAuth } from '../../context/AuthContext';
import { Route, Routes } from 'react-router-dom';


import ManagerNavBar from '../../components/manager/ManagerNavBar';
import './Manager.css';

const Manager = () => {
  const [password, setPassword] = useState('');
  const { isAuthenticated, login } = useAuth();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login(password)) {
      alert('Incorrect password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="password-prompt">
        <h2>Enter Password to Access Managers Page</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <AuthProvider>
      <div className="managers-page">
        <ManagerNavBar />
        <h1>Managers Page</h1>

      </div>
    </AuthProvider>
  );
};

export default Manager;
