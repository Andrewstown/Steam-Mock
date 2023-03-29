import React, {useState} from "react";

function GameLibraryCard ( {game} ) {
  
  const[clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked == true) {
      setClicked(false);
    }
    else{
        setClicked(true);
    }
  }

  return (
    <li className="gamecards__item">
      <div className="gamecard">
        <img
          onClick = {handleClick}
          src={game.img}
          alt={game.title}
          className="gamecard__image"
        />
        <div className="gamecard__content">
          <div className="gamecard__title">{game.title}</div>
          <div className="gamecard__genre">{game.genre}</div>
          <div className="gamecard__studio">{game.studio}</div>

          <p className="gamecard__text">{clicked ? "game.game_users" : "game.game_reviews"}</p>
          <div className="gamecard__detail">
          </div>
        </div>
      </div>
    </li>
  );
}

export default GameLibraryCard;