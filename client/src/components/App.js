import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./Home"
import Store from "./Store";
import Library from "./Library";
import Community from "./Community";
import Users from "./Users";
import NavBar from "./NavBar";
import Header from "./Header"

function App() {

  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/games/")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  useEffect(() => {
    fetch("/users/")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  return (
    <main>
      <Header />
      <NavBar />
      <h1>
        <Link to="/">We are better than Steam</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/store">
          <Store games = {games}/>
        </Route>
        <Route exact path="/library">
          <Library games = {games}/>
        </Route>
        <Route exact path="/community">
          <Community users = {users}/>
        </Route>
        <Route exact path="/user/:id">
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
