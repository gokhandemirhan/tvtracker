import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import List from "./components/List";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={List} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
