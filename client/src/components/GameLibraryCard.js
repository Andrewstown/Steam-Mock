import React, {useState, useEffect} from "react"

export default function GameLibraryCard({usergame, setG}){
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
    setG(game, usergame)
  }

  // console.log(game["title"])
  
  //user_games.game_id = game.id

  return (
      <div class="parent">
        {/* <div class="div1"> </div>
        <ul className="libraryList" onClick = {handleClick}>
          <h1>{game.title}</h1>
          <img src={game.img} alt={game.title}/>
        </ul>
        <div class="div2"> </div>
            <p>burrito3</p> */}
      </div>
  )
}




//     <ui className="gamecards__item">
//       <div className="card">
//         <img onClick = {handleClick} src={game.img} alt={game.title} className="gamecard__image"/>
//         <div className="gamecard__content">
//           <div className="gamecard__title">{game.title}</div>
//           <p className="gamecard__text">{clicked ? "game.game_users" : "game.game_reviews"}</p>
//           <div className="gamecard__detail">
//           </div>
//         </div>
//       </div>
//     </ui>
//   )
// }

{/* <div className="gameDiv">
<li className="card">
  <img src={game.img} alt={game.title}/>
  <h1>{game.title}</h1>
  <p className="genreLabel">{game.genre}</p>
  <p className="review">{game.game_review}
</li>
</div> */}