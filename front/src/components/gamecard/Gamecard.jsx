import React from "react";

const Gamecard = ({ name, image, rating }) => {
  return (
    <div style={styles.card}>
      <img style={styles.image} src={image} alt="Not Found" />
      <div style={styles.details}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.rating}>Rating: {rating}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "200px",
    margin: "16px",
    backgroundColor: "#fff", // Fondo blanco para que no se mezcle con el fondo de HomePage
  },
  image: {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  details: {
    padding: "16px",
  },
  name: {
    fontSize: "1.2em",
    margin: "0 0 8px 0",
  },
  rating: {
    fontSize: "0.9em",
    color: "#888",
    margin: "0",
  },
};

export default Gamecard;
