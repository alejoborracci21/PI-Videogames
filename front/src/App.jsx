// App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import HomePage from './pages/Homepage';
import GamePage from './pages/Gamepage';
import GenresPage from './pages/Genrespage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div style={styles.contain}>
    <Routes>
    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    <Route
      path="/home"
      element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
    />
    <Route path="/genres" element={<GenresPage />} />
    <Route path="/game/:id" element={<GamePage />} />
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
  </div>
  );
};

const styles = {
  contain: {
    backgroundColor: '#006633',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // 100% del alto de la pantalla
  },
}
export default App;
