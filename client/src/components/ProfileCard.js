import React, {useState} from "react"

export default function ProfileCard({user}){
  return(
    <li className="cards__item">
      <div className="card">
        <img
          src={user.img}
          alt={user.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{user.name}</div>
          <p className="card__text">{user.bio}</p>
          <div className="card__detail">
          </div>
        </div>
      </div>
    </li>
  )
}