import React, { useEffect, useReducer, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

// import Home from "./Home"
import GameStore from "./GameStore";
import GameLibrary from "./GameLibrary";
import Community from "./Community";
import Users from "./Users";
import UserContainer from "./UserContainer";
import NavBar from "./NavBar";
import Header from "./Header"

function App() {

  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then(data => {
        // print(data)
        setGames(data)});
  }, []);

  // useEffect(() => {
  //   fetch("/users")
  //     .then((r) => r.json())
  //     .then(setUsers);
  // }, []);


  
  useEffect(() => {
    setUsers({
      id: 1,
      bio: "likes Flatiron",
      pictureUrl: "https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/",
      name: "Duane",
      games: "COD, MarioCart, Smash",
      email: "duanegrell@gmail.com",
      password: "helpme"
    })
    console.log(users)
  }, []);



  return (
    <main>
      <Header />
      <NavBar />
      <UserContainer users />
      <h1>
        <Link to="/">We are better than Steam</Link>
      </h1>

      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        {/* <Route exact path="/store">
          <GameStore games = {games}/>
        </Route>
        <Route exact path="/library">
          <GameLibrary games = {games}/>
        </Route>
        <Route exact path="/community">
          <Community users = {users}/>
        </Route>
        <Route exact path="/user/:id">
          <Users users = {users}/>
        </Route>
        <Route path="*">
            <h1>404 not found</h1>
        </Route> */}
      </Switch>
    </main>
  );
}

export default App;
