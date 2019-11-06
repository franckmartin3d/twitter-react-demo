import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeButtons from "./components/HomeButton";
import Footer from "./components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        
        <div className="jumbotron">
          <h1  style={{
              fontFamily: "Georgia, serif",
              fontSize: "60px",
              fontVariant: "small-caps"
            }}>
              Twitter Showcase</h1>
          <p>
            This is a simple app that use the react framework to showcase some
            twitter account
          </p>
          <div className="row" >
            <HomeButtons 
              link="/Search"
              buttonTitle= "Search Tweets" >
            </HomeButtons>
            <HomeButtons 
              link="/StarTweetPage"
              buttonTitle= "Space Tweets" >
            </HomeButtons>

          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
