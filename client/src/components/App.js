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


  
  // useEffect(() => {
  //   setUsers({
  //     id: 1,
  //     bio: "likes Flatiron",
  //     img: "https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/",
  //     name: "Duane",
  //     user_games: "COD, MarioCart, Smash",
  //     email: "duanegrell@gmail.com",
  //     password: "helpme"
  //   })
  // }, []);
  // console.log(users)

  const filteredGames = searchGenre
    ? games.filter((game) => game.genres.toLowerCase().includes(searchGenre.toLowerCase()))
    :games;

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
          <GameStore games = {filteredGames} searchGenre = {searchGenre}/>
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
