// App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../src/pages/loginpage/Loginpage'
import HomePage from '../src/pages/homepage/Homepage';
import GamePage from '../src/pages/gamepage/Gamepage';
import Detail from './components/detail/Detail';
import CreateGamePage from './pages/creategamepage/CreategamePage';
import About from './pages/aboutpage/About';
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
    <Route path='/create' element={<CreateGamePage/>}/>
    <Route path="/detail" element={<GamePage />}>
      <Route path=':id' element={<Detail/>}> 
    </Route>
    </Route>
    <Route path='/about' element={<About/>}/>
    <Route path="*" element={<Navigate to="/login" />} />
  </Routes>
  </div>
  );
};

export default App;
