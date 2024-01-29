// CreateGamePage.jsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CreateGame from "../../components/creategame/creategame";
import "./CreateGamePage.css";

const CreateGamePage = () => {
  return (
    <div>
      <Navbar />
      <CreateGame />
    </div>
  );
};

export default CreateGamePage;
