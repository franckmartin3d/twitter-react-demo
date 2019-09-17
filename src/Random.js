import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TwitterTest from "./components/random/TwitterTest";
import RandomNavbar from "./components/random/RandomNavbar";
import Footer from "./components/Footer";

// array of objects 


class Random extends React.Component {
  render() {
    return (
      <div className="Container">
        <RandomNavbar />
        <TwitterTest
          
          
          title="Tweet  Test Page (prop test)"
         
         
        />
        <Footer />
      </div>
    );
  }
}

export default Random;
