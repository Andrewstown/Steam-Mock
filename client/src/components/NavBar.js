import React from "react"
import {NavLink} from "react-router-dom"

export default function NavBar({user}){
  return (
    <nav className="topnav">
      <ul>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        {user ? <li><NavLink to="/library">Library</NavLink></li> : null}
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
        {user ? <li> <NavLink to="/profile">Profile</NavLink> </li> : null}
      </ul>
    </nav>
  )
}