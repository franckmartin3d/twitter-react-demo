import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserCard from "./UserCard";
import withQuery from "with-query";


class StarTweetPage extends Component {
  state = {
    // Users.username, user.profileImageUrl
    users: [
      {
        username: "elonmusk",
        profileImageUrl:
          "http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg"
      },
      {
        username: "NASA",
        profileImageUrl:
          "http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg"
      },
      {
        username: "neiltyson",
        profileImageUrl:
          "http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg"
      },
      {
        username: "Cmdr_Hadfield",
        profileImageUrl:
          "http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg"
      }
    ],
    tweets: [],
    select:""
    
  };
  select = async(username) => {
    console.log(username);
    const response = await fetch(
      withQuery("api/list", {
        q: 'from:' + username
      })
    );

    const data = await response.json();
    console.log(data);

    this.setState({
      selection: username,
      tweets: [data]
    });
  }

  render() {
    return (
      <div className="Container">
        {/* Navbar */}
        <section className="bg-1">
          <Navbar />
        </section>

        {/* UserCards */}
        <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h1 className="display-4"> Random Tweet Page </h1>
            <p>Select a user</p>

            <section className="bg-1">
                <div className="row">
                    {/* Map image and username from user state */}
                    {this.state.users.map(user => <UserCard imageUrl={user.profileImageUrl} username={user.username} select={this.select}/>)}                  
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
