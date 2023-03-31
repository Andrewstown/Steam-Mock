import React from "react"
import {useHistory} from "react-router-dom"

export default function GameCard({game}){
  const history = useHistory()
  const handleClick = () => {
    history.push(`/store/${game.id}`)
  }

  return(
    <div className="gameDiv" onClick={handleClick}>
      {game ? <ul className="card">
        <img src={game.img} alt={game.title}/>
        <h1>{game.title}</h1>
        <p className="priceLabel">{game.price == 0 ? 'Free' : '$' + game.price}</p>
        <p className="genreLabel">{game.genre}</p>
      </ul> : null}
    </div>
  )
}