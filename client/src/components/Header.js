import React from "react"
import {NavLink} from "react-router-dom"
import {useHistory} from 'react-router-dom'

export default  function Header({updateUser, user}) {

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

  return(
    <header className="header">
      <ul>
        <h2 className="logo_text">Stream</h2>
        <img src="https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png" alt="Smoke" class="logo"></img>
        <div class="dropdown">
          <button onClick={user ? handleLogout : null} class="dropbtn">
          <NavLink to="/login">{user ? 'Logout' : 'Login'}</NavLink>
            {user ? <>
              <img src={user.img} className="header__image"></img>
              <p>{user.name}</p>
            </> : null}
          </button>
        </div>
      </ul>       
    </header>
    )
}