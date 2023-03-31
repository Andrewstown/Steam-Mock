import React, {useState} from "react"
import {useHistory, useLocation} from 'react-router-dom'

import ProfileCard from "./ProfileCard"
import CommunityUser from "./CommunityUser"

import './Community.css'

export default function Community({users}){
  const history = useHistory()
  const location = useLocation()

  const [search, setSearch] = useState('')

  const changeSearch = event => setSearch(event.target.value)

  const setU = user => history.push(`/community/${user}`)

  return (<>{location.pathname.length > 10 ?
    <ProfileCard user={users.find(user => user.id == location.pathname[11])}/>
    : <>
      <input type="text" className="searchTitle" onChange={changeSearch} value={search} placeholder="Search Users"/>
      <ul className="cards">
        {users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map(user => <CommunityUser user={user} setU={setU}/>)}
      </ul>
    </>
  }</>)
}