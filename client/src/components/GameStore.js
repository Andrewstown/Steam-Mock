
import React from "react";
import GameCard from "./GameCard";

function GameStore({ games, searchGenre, onChangeGenre }) {

  const cards = games.map((game) => (
    <GameCard game = {game}/>
  ))

  //eventListener goes here
  function handleChangeGenre(event) {
    onChangeGenre(event.target.value);
  };

  return (
    <div>
      <div class="search">
      <select id="select-genre" class="filter" placeholder="Pick a genre..." onChange={handleChangeGenre}>
          <option value="">Pick a genre...</option>
          <option value="indie">Indie</option>
          <option value="adventure">Adventure</option>
          <option value="multiplayer">Multiplayer</option>
          <option value="fantasy">Fantasy</option>
          <option value="sports">Sports</option>
          <option value="puzzle">Puzzle</option>
          <option value="shooter">Shooter</option>
          <option value="racing">Racing</option>
          <option value="open world">Open World</option>
          <option value="RPG">RPG</option>
          <option value="strategy">Strategy</option>
          <option value="anime">Anime</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="horror">Horror</option>
          <option value="PvP">PvP</option>
          <option value="PvE">PvE</option>
          <option value="VR">VR</option>
          <option value="sandbox">Sandbox</option>
          <option value="space">Space</option>
          <option value="mediveal">Mediveal</option>
          <option value="rouglike">Rouglike</option>
          <option value="platformer">Platformer</option>
          <option value="tower defense">Tower Defense</option>
        </select>
      </div>
      <ul className="cards">{cards}</ul>
    </div>
  );
}

export default GameStore;