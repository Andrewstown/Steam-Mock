import React, {useEffect, useState} from "react";
import GameLibraryCard from "./GameLibraryCard";

export default function GameLibrary({games, user}){
  const [userGames, setUserGames] = useState([])
  const [game, setGame] = useState(null)
  const [userGame, setUserGame] = useState(null)
  
  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then(r => r.json())
      .then(data => {
        setUserGames(data.user_games)
      })
  }, [])


  function setG(g, uG) {
    setGame(g);
    setUserGame(uG)
  }
  //

  // const cards = games.map((game) => (
  //   <GameLibraryCard game = {game}/>
  // ))

  return (
    <div className="gameDiv">
      {userGames && userGames.length > 0 ? userGames.map(usergame => <GameLibraryCard usergame={usergame} setG = {setG}/>) : null}
      {game ? <p>{game.title}</p>: null}
    </div>
  )
}