import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
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
          <a href="#">Account Details</a>
        </div>
      </div>             
    </header>
    );
}

export default Header;

