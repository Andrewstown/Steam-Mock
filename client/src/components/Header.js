import React from "react";

function Header() {
  return (
    <header className="header">
      <a className='installButton' href="https://store.steampowered.com/about/?snr=1_4_4__global-header">
        <img src="https://t4.ftcdn.net/jpg/00/15/08/29/360_F_15082962_hFK4ZWGDxR1N0EfG0bFNTipnRVMgnBqL.jpg"/>
      </a>
      <a className='emailButton' href="url">
        <img src="https://cdn-icons-png.flaticon.com/512/83/83968.png" />
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

