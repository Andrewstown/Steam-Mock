import React, {useState} from "react"
import CommunityUser from "./CommunityUser"
import './Community.css'

export default function Community({users}){
  const [search, setSearch] = useState('')

  const changeSearch = event => setSearch(event.target.value)

  return (<>
    <input type="text" className="searchTitle" onChange={changeSearch} value={search} placeholder="Search Users"/>
    <ul className="cards">
      {users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map(user => <CommunityUser user={user}/>)}
      </ul>
  </>)
}