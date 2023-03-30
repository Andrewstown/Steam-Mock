import React from "react";
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


function Header({updateUsers}) {

  const history = useHistory()

  const handleLogout = () => {
    fetch('/logout',{
      method: 'DELETE'
    })
    .then(r => {
      if(r.ok){
        updateUsers(null)
        history.push('/login')
      }
    })

  }

  return (
    <header className="header">
      <a href="url" class="button1">install now ⏩ </a>
      <a className='emailButton' href="url">
        <img src="https://icon-library.com/images/small-email-icon/small-email-icon-5.jpg" />
      </a>
      <div class="dropdown">
        <button class="dropbtn">user_name
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <li> 
            <NavLink to="/login">Login</NavLink>
          </li>
          {/* <a href="#">Account Details</a> */}
          <li onClick={handleLogout}>
            {/* Logout */}
            <NavLink to="/login">Logout</NavLink>
          </li>
        </div>
      </div>             
    </header>
    );
}

export default Header;

