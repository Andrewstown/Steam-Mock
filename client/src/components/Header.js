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
      <div class="dropdown">
        <button onClick={user ? handleLogout : null} class="dropbtn">
        <NavLink to="/login">{user ? 'Logout' : 'Login'}</NavLink>
          {user ? <>
            <img src={user.img} className="header__image"></img>
            <p>{user.name}</p>
          </> : null}
        </button>
      </div>       
    </header>
    )
}