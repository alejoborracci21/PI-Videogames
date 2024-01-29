// CreateGame.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './createstyles.css'; // Importa tu archivo CSS aquí

const CreateGame = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    released: '',
    background_image: '',
    rating: '',
    genres: [],
  });

  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:3001/genres');
        setGenresList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenreChange = (genreId) => {
    setFormData((prevData) => ({
      ...prevData,
      genres: prevData.genres.includes(genreId)
        ? prevData.genres.filter((id) => id !== genreId)
        : [...prevData.genres, genreId],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/videogames', formData);
      alert('Nuevo videojuego creado con éxito');
    } catch (error) {
      console.error('Error creating new game:', error);
    }
  };

  return (
    <div className="create-game-container">
      <h1 className="create-game-title">Crear Nuevo Videojuego</h1>
      <form className="create-game-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Nombre:
          <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label className="form-label">
          Descripción:
          <textarea className="form-input" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label className="form-label">
          Fecha de Lanzamiento:
          <input className="form-input" type="date" name="released" value={formData.released} onChange={handleChange} required />
        </label>
        <label className="form-label">
          URL de la Imagen (opcional):
          <input className="form-input" type="text" name="background_image" value={formData.background_image} onChange={handleChange} />
        </label>
        <label className="form-label">
          Rating:
          <input className="form-input" type="number" name="rating" value={formData.rating} onChange={handleChange} required />
        </label>

        <label className="form-label">
          Géneros:
        </label>
        <div className="checkbox-list">
          {genresList.map((genre) => (
            <label key={genre.id} className="checkbox-label">
              <input
                type="checkbox"
                value={genre.id}
                checked={formData.genres.includes(genre.id)}
                onChange={() => handleGenreChange(genre.id)}
              />
              {genre.name}
            </label>
          ))}
        </div>

        <button className="form-submit-button" type="submit">Crear Videojuego</button>
      </form>
    </div>
  );
};

export default CreateGame;
