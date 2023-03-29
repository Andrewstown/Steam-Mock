import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameLibrary from "./GameLibrary";

function GameCard({ game }) {

  return (
    <div className="gameDiv">
    <li className="card">
      <h1>{game.title}</h1>
      <p className="genreLabel">Genre: {game.genre}</p>
      <img 
      src={game.img} 
      alt={game.title} 
      />
      <p className="priceLabel">Price: {game.price}</p>
      <div className="description">
        <h2>Description</h2>
          <p>{game.description}</p>
      </div>
    </li>
    </div>
  );
}

export default GameCard;