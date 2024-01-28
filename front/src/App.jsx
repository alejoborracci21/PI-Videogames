// App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../src/pages/loginpage/Loginpage'
import HomePage from '../src/pages/homepage/Homepage';
import GamePage from '../src/pages/gamepage/Gamepage';
import GenresPage from '../src/pages/genrespage/Genrespage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
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

export default App;
