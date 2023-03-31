import React, {useState} from "react"
import "./ProfileCard.css"
import SubmitForm from "./SubmitForm"


export default function ProfileCard({user}){
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
          </div>
          <div>
            {edit? <button onClick={handleClick}>Edit Profile</button> : <SubmitForm/>}
          </div>
        </div>
      </li>
  )
}