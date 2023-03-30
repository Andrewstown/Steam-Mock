import React from "react";
import GameLibraryCard from "./GameLibraryCard";

function GameLibrary({ games }) {

  /*not sure where I'm pulling this id from...we will also need to change games => filteredGames before the map on line 9
  const filteredGames = games.filter(games.user_id == id).all()*/

  const cards = games.map((game) => (
    <GameLibraryCard game = {game}/>
  ))

  return (
    <div className="gameDiv">
      <ul className="cards">{cards}</ul>
    </div>
  );
}

export default GameLibrary;

