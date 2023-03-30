import React, {useState} from "react"

export default function GameLibraryCard({game}){
  
  const[clicked, setClicked] = useState(false)

  function handleClick() {
    if (clicked == true) {
      setClicked(false)
    }
    else{
      setClicked(true)
    }
  }

  return (
    <li className="gamecards__item">
      <div className="card">
        <img onClick = {handleClick} src={game.img} alt={game.title} className="gamecard__image"/>
        <div className="gamecard__content">
          <div className="gamecard__title">{game.title}</div>
          <p className="gamecard__text">{clicked ? "game.game_users" : "game.game_reviews"}</p>
          <div className="gamecard__detail">
          </div>
        </div>
      </div>
    </li>
  )
}