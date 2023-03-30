import React, { useEffect, useState } from "react"

export default function GameCard({game}){
  return(
    <div className="gameDiv">
      <li className="card">
        <img src={game.img} alt={game.title}/>
        <h1>{game.title}</h1>
        <p className="priceLabel">${game.price}</p>
        <p className="genreLabel">Genre: {game.genre}</p>
      </li>
    </div>
  )
}