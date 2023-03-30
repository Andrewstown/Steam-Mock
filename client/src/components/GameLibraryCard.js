import React, {useState, useEffect} from "react"

export default function GameLibraryCard({usergame}){
  const [clicked, setClicked] = useState(false)
  const [game, setGame] = useState(null)

  useEffect(() => {
    fetch(`/games/${usergame.game_id}`)
      .then(r => r.json())
      .then(data => {
        setGame(data)
      })
  }, [])

  function handleClick() {
    if (clicked == true) {
      setClicked(false)
    }
    else{
      setClicked(true)
    }
  }

  console.log(usergame, game)

  return (
    <ui className="gamecards__item">
      {/* <div className="card">
        <img onClick = {handleClick} src={game.img} alt={game.title} className="gamecard__image"/>
        <div className="gamecard__content">
          <div className="gamecard__title">{game.title}</div>
          <p className="gamecard__text">{clicked ? "game.game_users" : "game.game_reviews"}</p>
          <div className="gamecard__detail">
          </div>
        </div>
      </div> */}
    </ui>
  )
}