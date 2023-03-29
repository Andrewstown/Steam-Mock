import React from "react";

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
          <a href="#">View Profile</a>
          <a href="#">Account Details</a>
          <a href="#">Login</a>
        </div>
      </div>             
    </header>
    );
}

export default Header;

