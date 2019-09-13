import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TwitterTest from "./components/random/TwitterTest";
import RandomNavbar from "./components/random/RandomNavbar";
import Footer from "./components/Footer";


// array of objects 
const data =[
  {
  user: "Donal Trump",
  tweet: "i am an idiot",
  tweetTotal: 666
  },
  {
    user: "Devil",
    tweet: " I am the Neigbour of the beast",
    tweetTotal: 667
    },
    {
      user: "Barrack",
      tweet: " I was born in honolulu",
      tweetTotal: 4
      }
];


class Random extends Component {
  render() {
    return (
      <div className="Container">
        <RandomNavbar />
        <TwitterTest
          // props
          title="Tweet  Test Page (prop test)"
          numberOfClick={0}
        />
        <Footer />
      </div>
    );
  }
}

export default Random;
