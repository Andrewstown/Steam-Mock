import React, {useState} from "react";

function GameLibrary ( {title, img, price, genre, studio, description} ) {
  
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
          src={img}
          alt={title}
          className="gamecard__image"
        />
        <div className="gamecard__content">
          <div className="gamecard__title">{title}</div>
          <div className="gamecard__genre">{genre}</div>
          <div className="gamecard__studio">{studio}</div>

          <p className="gamecard__text">{clicked ? description : price}</p>
          <div className="gamecard__detail">
          </div>
        </div>
      </div>
    </li>
  );
}

export default GameLibrary;