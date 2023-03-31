import React from "react"
import ProfileCard from "./ProfileCard"

export default function Profile({user, updateUsers}){
  return (<ul className="cards"><ProfileCard user={user} updateUsers={updateUsers}/></ul>)
}