// Gamecard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./GamecardStyle.css";

const Gamecard = ({ id, name, image, rating, generos }) => {
  return (
    <div id={id} className="card">
      <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
        <img className="image" src={image} alt="Not Found" />
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
