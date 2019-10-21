import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomRender from "./RandomRender";
import Navbar from '../Navbar';
import Footer from "../Footer";

// array of objects 


class Random extends React.Component {
  render() {
    return (
      <body>
        <div className="Container">
        <Navbar />
        <RandomRender
          title="Random Tweet Page"
          
        />
      
      </div>
      <Footer />
      </body>
      
    );
  }
}

export default Random;
