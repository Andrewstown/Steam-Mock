import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import "./GameLibraryCard.css"

export default function GameLibraryCard({usergame}){
  const history = useHistory()
  const [game, setGame] = useState(null)

  useEffect(() => {
    fetch(`/games/${usergame.game_id}`)
      .then(r => r.json())
      .then(data => {
        setGame(data)
      })
  }, [])

  const handleClick = () => history.push(`/store/${game.id}`)

  return (
    <>
    {game ? <div class="libraryparent">
      <ul className="libraryList">
        <h1>{game.title}</h1>
        <img src={game.img} alt={game.title}/>
        <p>{'Last Played: ' + usergame.last_played.substr(0, 10)}</p>
        <p>{'Playtime: ' + usergame.hours_played + ' hours'}</p>
      </ul>
      <button className= "librarybutton" onClick={handleClick}>Store Page</button>
    </div> : null}
    </>
  )
}