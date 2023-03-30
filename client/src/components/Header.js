import React from "react";
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


function Header({updateUser, user}) {

  const history = useHistory()

  const handleLogout = () => {
    fetch('/logout',{
      method: 'DELETE'
    })
    .then(r => {
      if(r.ok){
        updateUser(null)
        history.push('/store')
      }
    })

  }

  return (
    <header className="header">
      <div class="dropdown">
        <button class="dropbtn">{user ?
        <div>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
          <img src={user.img}></img>
          <p>user.name</p>
        </div> :
        <NavLink to="/login">Login</NavLink>}
        </button>
      </div>       
    </header>
    );
}

export default Header;

