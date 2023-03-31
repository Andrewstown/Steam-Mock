import React, {useState} from "react"
import "./ProfileCard.css"

export default function ProfileCard({user}){
  console.log(user)
  return(
    user &&
      <li className="profile-cards-item">
        <div className="profile-card">
          <img
            src={user.img}
            alt={user.name}
            className="profile-card-image"
            />
          <div className="profile-card-content">
            <div className="profile-card-title">{user.name}</div>
            <p className="profile-card-text">Bio: {user.bio}</p>
            <div className="profile-card-detail">
            </div>
          </div>
        </div>
      </li>
  )
}