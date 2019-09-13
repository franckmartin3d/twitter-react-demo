import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TwitterTest from "./components/random/TwitterTest";
import RandomNavbar from "./components/random/RandomNavbar";
import Footer from "./components/Footer";

class Random extends Component {
  render() {
    return (
      <div className="Container">
        <RandomNavbar />
        <TwitterTest />
        <Footer />
      </div>
    );
  }
}

export default Random;
