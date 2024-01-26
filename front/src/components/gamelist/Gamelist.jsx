import React, { useState } from 'react';
import Gamecard from '../gamecard/gamecard';

const GameList = ({ games }) => {
  const itemsPerPage = 6; // Número de juegos por página
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

  return (
    <div>
      <div style={styles.cardContainer}>
        {currentGames.map(({ id, name, image, rating }) => (
          <div key={id} style={styles.cardWrapper}>
            {!addedGameIds.has(id) && (
              <Gamecard
                key={id}
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
      <div style={styles.pageContainer}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            style={index + 1 === currentPage ? { ...styles.pageButton, backgroundColor: 'gray' } : styles.pageButton}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
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
    width: '30%',
    marginBottom: '20px',
  },
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  pageButton: {
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GameList;
