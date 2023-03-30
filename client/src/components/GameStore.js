
import React from "react";
import GameCard from "./GameCard";

function GameStore({ games, searchGenre, onChangeGenre, onChangedTitle, searchTitle }) {

  const cards = games.map((game) => (
    <GameCard game = {game}/>
  ))

 // eventListeners go here
    function handleChangeGenre(event) {
      onChangeGenre(event.target.value);
    };

    function handleChangeTitle(event) {
      onChangedTitle(event.target.value);
    };



  return (
    <div className="store">
      <div class="search">
        <select id="select-genre" class="filter" placeholder="Pick a genre..." onChange={handleChangeGenre}>
            <option value="">Pick a genre...</option>
            <option value="Indie">Indie</option>
            <option value="Adventure">Adventure</option>
            <option value="Multiplayer">Multiplayer</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sports">Sports</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooter">Shooter</option>
            <option value="Racing">Racing</option>
            <option value="Open world">Open World</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Anime">Anime</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Horror">Horror</option>
            <option value="PvP">PvP</option>
            <option value="PvE">PvE</option>
            <option value="VR">VR</option>
            <option value="Sandbox">Sandbox</option>
            <option value="Space">Space</option>
            <option value="Mediveal">Mediveal</option>
            <option value="Rouglike">Rouglike</option>
            <option value="Platformer">Platformer</option>
            <option value="Tower defense">Tower Defense</option>
          </select>
          <input type="text" className="searchTitle" onChange = {handleChangeTitle} value = {searchTitle}/>
      </div>
      <div>
        <ul className="cards">{cards}</ul>
      </div>
  </div>
  );
}

export default GameStore;