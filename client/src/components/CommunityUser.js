import React from "react"

export default function CommunityUser({user, setU}){
  const handleClick = () => setU(user.id)

  return(
    <li className="cards__item">
      <div className="card_community">
        <img onClick = {handleClick} src={user.img} alt={user.name} className="card__image"/>
        <div className="card__content">
          <div className="card__title">{user.name}</div>
        </div>
      </div>
    </li>
  )
}