import React, {useState} from "react"
import {useLocation} from "react-router-dom"

import SubmitForm from "./SubmitForm"

import "./ProfileCard.css"

export default function ProfileCard({user, updateUsers}){
  const location = useLocation()

  const [edit, setEdit] = useState(false)

  const handleClick = () => setEdit(!edit)

  return(<>{user ?
    <li className="profile-cards-item">
      <div className="profile-card">
        <img src={user.img} alt={user.name} className="profile-card-image"/>
        <div className="profile-card-title">{user.name}</div>
        <p className="profile-card-text">Bio: {user.bio}</p>
      </div>
      {location.pathname.length < 10 ? edit ? <SubmitForm user={user} updateUsers={updateUsers}/> : <button onClick={handleClick}>Edit Profile</button> : null}
    </li>
  : null}</>)
}