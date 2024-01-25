// Login.js
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggedIn, setLoggedIn] = useState(false); // Agregamos el estado de isLoggedIn
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí realizar la lógica de verificación de credenciales
    const isValid = /* Tu lógica de verificación de credenciales */ true;

    if (isValid) {
      console.log('Redirigiendo a /home');
      onLogin();
      setLoggedIn(true); // Establecemos el estado de isLoggedIn a true
      // navigate('/home'); // No es necesario, ya que el componente se redirigirá automáticamente
    } else {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  // Utilizamos un fragmento condicional para evitar el renderizado después de la redirección
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
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
              <button type="submit" style={styles.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Resto del código sigue igual


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("https://www.theinterline.com/wp-content/uploads/2022/11/Fashion-videogame-news-header.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
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
    marginBottom: '5px',
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
