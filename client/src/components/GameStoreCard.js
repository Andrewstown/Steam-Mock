import React, {useState} from "react"
import {useHistory, useLocation} from "react-router-dom"

import ReviewCard from './ReviewCard'

export default function GameStoreCard({game, user}){
  const [purchased, setPurchased] = useState(user ? user.user_games.find(usergame => usergame.game_id == game.id) : null)

  const history = useHistory()
  const location = useLocation()
  
  const handleClick = () => {
    history.push(`/store/${game.id}`)
  }

  const handleSubmit = e => {
    let form = e.target
    fetch(`/reviews`, {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        rating: parseInt(form.rating.value),
        description: form.review.value,
        user_id: user.id,
        game_id: game.id
      })
    })
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
            <h1 className="store_label">{game.title}</h1>
            <p className="store_label">{game.price === 0 ? 'Free' : '$' + game.price}</p>
            <p className="store_label">{game.genre}</p>
            {location.pathname.length > 7 ?
            <>
              <p>{game.studio}</p>
              <p>{game.description}</p>
              {purchased ? null : <button class="dropbtn" onClick={userBuy}>BUY</button>}
            </>
            : null}
          </ul>
          {location.pathname.length > 7 ? <>
            {game.game_reviews.find(review => review.user_id == user.id) || !user.user_games.find(usergame => usergame.game_id == game.id)? null : <>
              <div className='userForm'>
              <form onSubmit={handleSubmit} className="form">
                <h1>Write A Review!</h1>
                <label for='rating'>Rating:</label>
                <input type="number" min='1' max='10' name='rating'/>
                <label for='review'>Review:</label>
                <input type="text" name='review'/>
                <button type="submit">Submit</button> 
              </form>
            </div> 
            </>}
            <ul className="review">{game.game_reviews.map(review => <ReviewCard review={review}/>)}</ul>
          </>: null}
      </>: null}
    </div>
  )
}