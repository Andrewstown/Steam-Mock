
import React from "react";
import GameCard from "./GameCard";

function GameStore({ games }) {

  const cards = games.map((game) => (
    <GameCard game = {game}/>
  ))

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default GameStore;