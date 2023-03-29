import React, {useState} from "react";

function Users( {name, bio, games, pictureUrl} ) {
  
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
    <li className="cards__item">
      <div className="card">
        <img
          onClick = {handleClick}
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{clicked ? games : bio}</p>
          <div className="card__detail">
          </div>
        </div>
      </div>
    </li>
  );
}

export default Users;