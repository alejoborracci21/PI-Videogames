// GameList.jsx
import React, { useState } from 'react';
import Gamecard from '../gamecard/Gamecard';
import './GameList.css';

const GameList = ({ games }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [addedGameIds, setAddedGameIds] = useState(new Set());

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddGame = (id) => {
    setAddedGameIds((prevIds) => new Set(prevIds).add(id));
  };

  const totalPages = Math.ceil(games.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = games.slice(startIndex, endIndex);
  console.log(currentGames)

  return (
    <div>
      <div className="cardContainer">
        {currentGames.map(({ id, name, background_image, rating, genres }) => (
          <div key={id} className="cardWrapper">
            {!addedGameIds.has(id) && (
              <Gamecard
                key={id}
                id={id}
                name={name}
                background_image={background_image}
                rating={rating}
                generos={genres}
                onAdd={() => handleAddGame(id)}
              />
            )}
          </div>
        ))}
      </div>
      <div className="pageContainer">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={
              index + 1 === currentPage ? 'pageButton active' : 'pageButton'
            }
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameList;
