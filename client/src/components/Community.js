import React, {useState} from "react"
import UserContainer from "./CommunityUser"
import './Users.css'

export default function Users({users}){
  const usercards = users.map(user => <UserContainer user = {user}/>)

  return(
    <ul className="cards">{usercards}</ul>
  )
}