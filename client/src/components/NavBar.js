import React from "react"
import {NavLink} from "react-router-dom"

export default function NavBar(){
  return (
    <nav className="topnav">
      <ul>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/library">Library</NavLink>
        </li>
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  )
}