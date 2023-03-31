import React, {useState} from "react"
import {useHistory, useLocation} from "react-router-dom"

import ReviewCard from './ReviewCard'

export default function GameCard({game, user}){
  const [purchased, setPurchased] = useState(user ? user.user_games.find(usergame => usergame.game_id == game.id) : null)

  const history = useHistory()
  const location = useLocation()
  
  const handleClick = () => {
    history.push(`/store/${game.id}`)
  }

  const userBuy = () => {
    fetch('/usergames', {
      method: "POST",
      headers: {
          "Content-Type":"application/json"                    
      },
      body: JSON.stringify({
        user_id: user.id,
        game_id: game.id
      })
    })
    .then(setPurchased(true))
  }

  return(
    <div className="gameDiv" onClick={handleClick}>
      {game ?
        <>
          <ul className="card">
            <img src={game.img} alt={game.title}/>
            <h1>{game.title}</h1>
            <p className="priceLabel">{game.price === 0 ? 'Free' : '$' + game.price}</p>
            <p className="genreLabel">{game.genre}</p>
            {location.pathname.length > 7 ?
            <>
              <p>{game.studio}</p>
              <p>{game.description}</p>
              {purchased ? null : <button class="dropbtn" onClick={userBuy}>BUY</button>}
            </>
            : null}
          </ul>
          {location.pathname.length > 7 ?
            <ul className="review">{game.game_reviews.map(review => <ReviewCard review={review}/>)}</ul>
          : null}
      </>: null}
    </div>
  )
}