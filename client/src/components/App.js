import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./Home"
import User from "./User";
import Game from "./Game";

function App() {
  return (
    <main>
      <h1>
        <Link to="/">We are better than Steam</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/:id">
          <User />
        </Route>
        <Route exact path="/game/:id">
          <Game />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
