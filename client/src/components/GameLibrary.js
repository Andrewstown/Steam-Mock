import React, {useEffect, useState} from "react"
import GameLibraryCard from "./GameLibraryCard"

export default function GameLibrary({user}){
  const [userGames, setUserGames] = useState([])
  const [userGame, setUserGame] = useState(null)
  const [game, setGame] = useState(null)

  
  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then(r => r.json())
      .then(data => {
        setUserGames(data.user_games)
      })
  }, [])

  return (
    <div className="gameDiv">
      {userGames && userGames.length > 0 ? userGames.map(usergame => <GameLibraryCard usergame={usergame}/>) : null}
    </div>
  )
}