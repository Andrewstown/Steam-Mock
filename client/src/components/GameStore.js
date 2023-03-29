
import React from "react";
import GameCard from "./GameCard";

function GameStore({ games }) {

  const cards = games.map((game) => (
    <GameCard
      key = {game.id}
      id = {game.id}
      title = {game.title}
      img = {game.img}
      genre = {game.genre}
      studio = {game.studio}
    />
  ))

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default GameStore;