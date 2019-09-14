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
  tweetDate: "9/12/2019"
  },
  {
    user: "Devil",
    tweet: " I am the Neigbour of the beast",
    tweetDate: "6/06/666"
    },
    {
      user: "Barrack",
      tweet: " I was born in honolulu!!",
      tweetDate: "1/02/2011"
      }
];

class Random extends Component {
  render() {
    return (
      <div className="Container">
        <RandomNavbar />
        <TwitterTest
          // props
          initialTweetData ={data}
          title="Tweet  Test Page (prop test)"
          numberOfClick={0}
         
        />
        <Footer />
      </div>
    );
  }
}

export default Random;
