import React, {useState} from "react"
import SubmitForm from "./SubmitForm"
import "./ProfileCard.css"

export default function ProfileCard({user, updateUsers}){
  const [edit, setEdit] = useState(false)
  const handleClick = () => {
    setEdit(!edit)
  }

  return(<>{user ?
    <li className="profile-cards-item">
      <div className="profile-card">
        <img src={user.img} alt={user.name} className="profile-card-image"/>
        <div className="profile-card-title">{user.name}</div>
        <p className="profile-card-text">Bio: {user.bio}</p>
      </div>
      {edit ? <SubmitForm user={user} updateUsers={updateUsers}/> : <button onClick={handleClick}>Edit Profile</button>}
    </li>
  : null}</>)
}