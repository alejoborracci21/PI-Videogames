// Detail.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailStyles.css";

const Detail = () => {
  const URL = 'http://localhost:3001/videogames/'
  const { id } = useParams()
  const [game, setGame] = useState()

  const onSearch = async () => {
    try {
      const { data } = await axios(`${URL}${id}`)
      if (data.name) setGame(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div className="detail-container">
      {game && (
        <div>
          {game.background_image && (
            <img className="detail-image" src={game.background_image} alt={game.name} />
          )}
          <h1 className="detail-title">{game.name}</h1>
          <h1 className="detail-rating">Rating: {game.rating}</h1>
          <div className="detail-genres">
            <p>Generos:</p>
            {game.genres && game.genres.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </div>
          <div className="detail-platforms">
            <p>Plataformas:</p>
            {game.platforms && game.platforms.map((p) => (
              <span key={p.platform.id}>{p.platform.name} </span>
            ))}
          </div>
          <p className="detail-description">{game.description}</p>
          {game.website && <h4 className="detail-website"><a href={game.website} target="_blank" rel="noopener noreferrer">Website</a></h4>}
        </div>
      )}
    </div>
  )
}

export default Detail;
