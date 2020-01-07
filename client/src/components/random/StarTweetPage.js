import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserCard from "./UserCard";
import EmbedResult from "./EmbedResult";
import "./StarTweet.css";

import withQuery from "with-query";

class StarTweetPage extends Component {
  state = {
    // Users.username, user.profileImageUrl
    users: [
      {
        username: "elonmusk",
        profileImageUrl:
          "https://pbs.twimg.com/profile_images/1192598203679395840/Vyf3YlG5_200x200.jpg"
      },
      {
        username: "NASA",
        profileImageUrl:
          "https://pbs.twimg.com/profile_images/1091070803184177153/TI2qItoi_200x200.jpg"
      },
      {
        username: "neiltyson",
        profileImageUrl:
          "https://pbs.twimg.com/profile_images/74188698/NeilTysonOriginsA-Crop_200x200.jpg"
      },
      {
        username: "Cmdr_Hadfield",
        profileImageUrl:
          "https://pbs.twimg.com/profile_images/620788674414952456/y_ozO3uO_200x200.png"
      }
    ],
    select: "",
    tweets: [],

    displayTweet: false
  };

  // Selection and retrival of tweets
  select = async username => {
    const response = await fetch(
      withQuery("api/list", {
        q: "from:" + username
      })
    );

    const data = await response.json();

    this.setState({
      selection: username,
      tweets: data,
      displaytweet: true
    });
    
  };

  render() {
    // Logic
    const userCards =  this.state.users.map(user => (
      <UserCard
      imageUrl={user.profileImageUrl}
      username={user.username}
      select={this.select}
      />
    ));

    const results = this.state.displaytweet === true && this.state.tweets.length > 0
      ? this.state.tweets.map(tweets => {
          return (
            <EmbedResult source={tweets.id_str} key={tweets.id_str} />
          );
        })
      : null;

    return (
      <div className="container">
        {/* Navbar */}
        <section className="bg-1">
          <Navbar />
        </section>

        {/* UserCards */}
        <div className="jumbotron jumbotron-fluid text-center border-primary">
          <h1 className="main-title">
            Space Tweets
          </h1>
          <p>Select user</p>

          <div className="container" style={{ textAlign: "center" }}>
            <div className="row">
              {/* Map image and username from user state */}
               {userCards} 
            </div>
          </div>

          {/* result */}
          <section className="bg-1">
            <div className="row">
              {results}
            </div>
          </section>
        </div>

        {/* Footer */}
        <section className="bg-1">
          <Footer />
        </section>
      </div>
    );
  }
}

export default StarTweetPage;
