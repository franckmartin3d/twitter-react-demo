import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TwitterTest from "./components/random/TwitterTest";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

// array of objects 


class Random extends React.Component {
  render() {
    return (
      <body>
        <div className="Container">
        <Navbar />
        <TwitterTest
          title="Tweet  Test Page (prop test)"
          
        />
      
      </div>
      <Footer />
      </body>
      
    );
  }
}

export default Random;
