import React from "react";
import GameLibraryCard from "./GameLibraryCard";

function GameLibrary({ games }) {

  const cards = games.map((game) => (
    <GameLibraryCard game = {game}/>
  ))

  return (
    <ul className="cards">{cards}</ul>
  );
}

export default GameLibrary;