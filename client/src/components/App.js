import React, { useEffect, useReducer, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

// import Home from "./Home"
import GameStore from "./GameStore";
import GameLibrary from "./GameLibrary";
import Community from "./Community";
import Users from "./Users";
import NavBar from "./NavBar";
import Header from "./Header"
import Home from "./Home"

function App() {

  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])

  const [searchGenre, setSearchGenre] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(data => {
        setGames(data)});
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(data => {
        // console.log(data)
        setUsers(data)});
  }, []);



  const filteredGames = games.filter((game) => game.genre.toLowerCase().includes(searchGenre.toLowerCase()))

  const filteredGamesByGenreTitle = filteredGames.filter((game) => game.title.toLowerCase().includes(searchTitle.toLowerCase()))


  return (
    <main className="app">
      <Header />
      <NavBar />
      <h1>
        <Link to="/">Hi Friends</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route exact path="/store">
          <GameStore games = {filteredGamesByGenreTitle} searchGenre = {searchGenre} onChangeGenre={setSearchGenre} searchTitle = {searchTitle} onChangedTitle = {setSearchTitle} />
        </Route>
        <Route exact path="/library">
          <GameLibrary games = {games}/>
        </Route>
        <Route exact path="/community">
          <Community users = {users}/>
        </Route>
        <Route exact path="/user">
          <Users users = {users}/>
        </Route>
        <Route path="*">
            <h1>404 not found</h1>
        </Route> 
      </Switch>
    </main>
  );
}

export default App;
