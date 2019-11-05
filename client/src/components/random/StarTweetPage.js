import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserCard from "./UserCard";
import EmbedResult from "./EmbedResult";

import withQuery from "with-query";


class StarTweetPage extends Component {
  state = {
    // Users.username, user.profileImageUrl
    users: [
      {
        username: "elonmusk",
        profileImageUrl:
          "https://pbs.twimg.com/profile_images/1190287557927538688/AYAstym8_200x200.jpg"
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
    select:"",
    tweets: [],

    displayTweet: false
    
  };
  select = async(username) => {
    console.log(username);
    const response = await fetch(
      withQuery("api/list", {
        q: 'from:' + username
      })
    );

    const data = await response.json();
    console.log("data from api",data);

    this.setState({
      selection: username,
      tweets: data,
      displaytweet: true
    });
    console.log("status of state.tweet = ",this.state.tweets);
  }

  render() {
    return (
      <div className="container">
        {/* Navbar */}
        <section className="bg-1">
          <Navbar />
        </section>

        {/* UserCards */}
        <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h1 className="display-4"> Random Tweet Page </h1>
            <p>Select a user</p>
            
              <div className="row">
               
                <div className= "col md={auto}"> 
                    <div className="row">
                    {/* Map image and username from user state */}
                    {this.state.users.map(user => <UserCard imageUrl={user.profileImageUrl} username={user.username} select={this.select}/>)}                  
                    </div>

                </div>
               
              </div>



            {/* result */}
            <section className="bg-1">
                <div className="row">

                {
                this.state.displaytweet === true && this.state.tweets.length > 0 
                  ? this.state.tweets.map(tweets => {
                      console.log("this is the value of this.state.tweets: ", this.state.tweets);
                      console.log("this is the tweets parameter in .map: ", tweets);
                      return (<EmbedResult source={tweets.id_str} key={tweets.id_str} />);
                    })
                  : console.log("this.state.tweets is empty")
               }
                        
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
