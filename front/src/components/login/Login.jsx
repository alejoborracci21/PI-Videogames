// Login.js
import React, { useState } from 'react';
import { Navigate, useHistory } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí realizar la lógica de verificación de credenciales
    const isValid = /* Tu lógica de verificación de credenciales */ true;

    if (isValid) {
      // Navegar a la página de inicio
      history.push('/home');
    } else {
      // Manejar credenciales inválidas si es necesario
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email:
            <input type="email" name="email" value={credentials.email} onChange={handleInputChange} required style={styles.input} />
          </label>
          <label style={styles.label}>
            Password:
            <input type="password" name="password" value={credentials.password} onChange={handleInputChange} required style={styles.input} />
          </label>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("https://www.theinterline.com/wp-content/uploads/2022/11/Fashion-videogame-news-header.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0, // Asegura que no haya márgenes en el cuerpo de la página
  },
  formWrapper: {
    width: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  title: {
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    marginBottom: '5px', // Ajuste para reducir el espacio entre los inputs
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
