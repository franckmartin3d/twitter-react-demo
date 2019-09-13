import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

// App components
import Home from "./Home";
import Search from "./Search";
import Random from "./Random";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/Search" component={Search} />
        <Route path="/Random" component={Random} />
      </BrowserRouter>
    );
  }
}

export default App;
