// Login.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './LoginStyles.css';

const Login = ({onLogin}) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = true; // Tu lógica de verificación de credenciales

    if (isValid) {
      console.log('Redirigiendo a /home');
      onLogin();
      setLoggedIn(true);
    } else {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <div className="login-container">
          <div className="login-formWrapper">
            <h3 className="login-title">Login</h3>
            <form onSubmit={handleSubmit} className="login-form">
              <label className="login-label">
                Email:
                <input type="email" name="email" value={credentials.email} onChange={handleInputChange} required className="login-input" />
              </label>
              <label className="login-label">
                Password:
                <input type="password" name="password" value={credentials.password} onChange={handleInputChange} required className="login-input" />
              </label>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
