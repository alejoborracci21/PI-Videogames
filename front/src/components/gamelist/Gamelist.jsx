import React, { useState } from 'react';
import Gamecard from '../gamecard/gamecard';

const GameList = ({ games }) => {
  const itemsPerPage = 6; // Número de juegos por página
  const [currentPage, setCurrentPage] = useState(1);
  const [addedGameIds, setAddedGameIds] = useState(new Set());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGames = games.slice(startIndex, endIndex);

  const totalPages = Math.ceil(games.length / itemsPerPage);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddGame = (id) => {
    setAddedGameIds((prevIds) => new Set(prevIds).add(id));
  };

  return (
    <div>
      <div style={styles.cardContainer}>
        {currentGames.map(({ id, name, image, rating }) => (
          <div key={id} style={styles.cardWrapper}>
            {!addedGameIds.has(id) && (
              <Gamecard
                id={id}
                name={name}
                image={image}
                rating={rating}
                onAdd={() => handleAddGame(id)}
              />
            )}
          </div>
        ))}
      </div>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} style={styles.loadMoreButton}>
          Load More ({currentPage}/{totalPages})
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '30%', // Ajusta el ancho según tus preferencias
    marginBottom: '20px',
  },
  loadMoreButton: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GameList;
