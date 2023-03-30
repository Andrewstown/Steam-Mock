import React from "react"
import CommunityUser from "./CommunityUser"
import './Community.css'

export default function Users({users}){
  return (<ul className="cards">{users.map(user => <CommunityUser user={user}/>)}</ul>)
}