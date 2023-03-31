import React, {useEffect, useState} from "react"
import {Route, Switch, useHistory} from "react-router-dom"

import NavBar from "./NavBar"
import Header from "./Header"
import Profile from "./Profile"
import Community from "./Community"
import GameStore from "./GameStore"
import GameLibrary from "./GameLibrary"
import Authentication from "./Authentication"

export default function App(){
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  const [users, setUsers] = useState(null)
  const [searchGenre, setSearchGenre] = useState("")
  const [searchTitle, setSearchTitle] = useState("")

  useEffect(() => {
    fetchUser()
  },[])

  useEffect(() => {
    updateUsers()
  }, [])

  useEffect(() => {
    fetch("/games")
      .then(r => r.json())
      .then(data => {
        setGames(data)})
  }, [])

  const fetchUser = () => {
    fetch('/authorized')
    .then (r => {
      if (r.ok){
        r.json().then(user => setUser (user))
      }else{
        setUser(null)
      }
    })
  }

  const updateUsers = () => {
    fetch("/users", )
    .then(r => r.json())
    .then(data => {
      setUsers(data)})
  }

  const updateUser = user => setUser(user)

  return(
    <main className="app">
      <Header updateUser={updateUser} user={user}/>
      <NavBar user={user}/>
      <Switch>
        <Route exact path="/">
          {useHistory().push('/store')}
        </Route>
        <Route path="/store">
          <GameStore games={games} searchGenre={searchGenre} onChangeGenre={setSearchGenre} searchTitle={searchTitle} onChangedTitle={setSearchTitle} user={user}/>
        </Route>
        {user ? <Route exact path="/library">
          <GameLibrary user={user}/>
        </Route> : null}
        <Route path="/community">
          {users ? <Community users = {users}/> : null}
        </Route>
        <Route exact path="/login">
          <Authentication updateUser={updateUser} updateUsers={updateUsers}/>
        </Route>
        {user ? <Route exact path="/profile">
          <Profile user={user} updateUsers={updateUsers}/>
        </Route> : null}
        <Route path="*">
            <h1>404 not found</h1>
        </Route> 
      </Switch>
    </main>
  )
}