import React, {useEffect, useState} from "react";
import GameLibraryCard from "./GameLibraryCard";

export default function GameLibrary({games, user}){
  const [userGames, setUserGames] = useState([])
  
  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then(r => r.json())
      .then(data => {
        setUserGames(data.user_games)
      })
  }, [])

  /*not sure where I'm pulling this id from...we will also need to change games => filteredGames before the map on line 9
  const filteredGames = games.filter(games.user_id == id).all()*/

  // const cards = games.map((game) => (
  //   <GameLibraryCard game = {game}/>
  // ))

  return (
    <div className="gameDiv">
      {userGames && userGames.length > 0 ? userGames.map(usergame => <GameLibraryCard usergame={usergame}/>) : null}
    </div>
  )
}