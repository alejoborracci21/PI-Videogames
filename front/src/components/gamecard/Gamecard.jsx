// Gamecard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./GamecardStyle.css";

const Gamecard = ({ id, name, background_image, rating, generos, onAdd }) => {
  const imageUrl = background_image ?? 'https://i.pinimg.com/originals/1d/2f/7a/1d2f7a9c6fb224ca63c8b79f4f055861.png';

  return (
    <div id={id} className="card">
      <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
        <img className="image" src={imageUrl} alt="Not Found" />
        <div className="details">
          <h2 className="name">{name}</h2>
          <p className="rating">Rating: {rating}</p>
          <div className="genres">
            <strong>Generos:</strong>
            <ul>
              {generos && generos.map((genero) => (
                <li key={genero.id}>{genero.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Gamecard;
