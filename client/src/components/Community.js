import React, {useState} from "react"
import {useLocation} from 'react-router-dom'
import CommunityUser from "./CommunityUser"
import './Community.css'

export default function Community({users}){
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [user, setUser] = useState(null)

  const changeSearch = event => setSearch(event.target.value)

  const setU = user => console.log(user)

  return (<>user ?

    : <input type="text" className="searchTitle" onChange={changeSearch} value={search} placeholder="Search Users"/>
    <ul className="cards">
      {users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map(user => <CommunityUser user={user} setU={setU}/>)}
      </ul>
  </>)
}