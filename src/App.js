import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import List from "./components/List";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
         
          <Route path="/detail" component={Detail} />
          <Route path="/" component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
