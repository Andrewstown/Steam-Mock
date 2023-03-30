import React, {useEffect, useReducer, useState} from "react"
import {Link, Route, Switch} from "react-router-dom"

import NavBar from "./NavBar"
import Header from "./Header"
import Community from "./Community"
import GameStore from "./GameStore"
import GameLibrary from "./GameLibrary"
import Authentication from "./Authentication"

export default function App(){

  const [games, setGames] = useState([])
  const [users, setUsers] = useState(null)
  const [user, setUser] = useState(null)

  const [searchGenre, setSearchGenre] = useState("")
  const [searchTitle, setSearchTitle] = useState("")

  const fetchUser = () => {
    fetch('/authorized')
    .then (r => {
      if (r.ok) {
        r.json().then(user => setUser (user))
      }else {
        setUser(null)
      }
    })

  }

  useEffect(() => {
    fetch("/games")
      .then(r => r.json())
      .then(data => {
        setGames(data)})
  }, [])

  useEffect(() => {
    fetch("/users")
      .then(r => r.json())
      .then(data => {
        setUsers(data)})
  }, [])

  const updateUsers = user => setUsers(user)
  const updateUser = user => setUser(user)

  if(!users) return (
    <main className="app">
    <Header updateUser={updateUser} />
    <NavBar />
    <Switch>
      <Route exact path="/login">
          <Authentication updateUser={updateUser}/>
        </Route>
    </Switch>
  </main>
  )

  return (
    <main className="app">
      <Header updateUser={updateUser} user={user}/>
      <NavBar/>
      <Switch>
        <Route exact path="/store">
          <GameStore games = {games.filter(game => game.genre.toLowerCase().includes(searchGenre.toLowerCase()) && game.title.toLowerCase().includes(searchTitle.toLowerCase()))} searchGenre={searchGenre} onChangeGenre={setSearchGenre} searchTitle={searchTitle} onChangedTitle={setSearchTitle}/>
        </Route>
        <Route exact path="/library">
          <GameLibrary games = {games}/>
        </Route>
        <Route exact path="/community">
          <Community users = {users}/>
        </Route>
        <Route exact path="/login">
          <Authentication updateUser={updateUser}/>
        </Route>
        <Route path="*">
            <h1>404 not found</h1>
        </Route> 
      </Switch>
    </main>
  )
}