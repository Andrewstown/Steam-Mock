import React, {useState} from "react"
import CommunityUser from "./CommunityUser"
import './Community.css'

export default function Community({users}){
  const [search, setSearch] = useState(null)
  return (<ul className="cards">{users.map(user => <CommunityUser user={user}/>)}</ul>)
}