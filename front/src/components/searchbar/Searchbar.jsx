// Searchbar.jsx
import React, { useState } from 'react';
import './SearchbarStyles.css';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setErrorMessage('');
  };

  const handleClick = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    } else {
      setErrorMessage('Ingresa un nombre válido');
    }
  };

  return (
    <div className="searchbar-container">
      <h3>Buscar videojuegos por nombre:</h3>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <button
        onClick={handleClick}
        className="search-button"
      >
        Search
      </button>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default Searchbar;
