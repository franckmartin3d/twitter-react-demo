import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Row from 'react-bootstrap/Row'
import UserCard from "./UserCard";
import TweetCard from "./TweetCard";
import withQuery from "with-query";

class Random extends Component {
  state = {
    users: [
      { username: 'elonmusk', profileImageUrl: 'http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg' },
      { username: 'NASA', profileImageUrl: 'http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg' },
      { username: 'neiltyson', profileImageUrl: 'http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg' },
      { username: 'Cmdr_Hadfield', profileImageUrl: 'http://pbs.twimg.com/profile_images/1189352750972227584/SuH9KpDT_normal.jpg' }
    ],
    tweets: []
  }

  select = async(username) => {
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
    console.log(this.state.users);
    return(
    <Container>
      <Navbar />

      <div className="jumbotron jumbotron-fluid text-center border-primary">
        <h1 className="display-4"> Random Tweet Page </h1>
        <p>Select a user</p>
      </div>

      <Container>
        <Row>
          {
            this.state.users.map(user => <UserCard imageUrl={user.profileImageUrl} select={this.select} username={user.username} />)
          }                  
        </Row>
      </Container>

      <Container>
        <Row>
          { this.state.tweets.length > 0
            ? this.state.tweets.map(tweet => <TweetCard src={"fdsaf"} />)
            : console.log("this.state.tweets is empty") }
        </Row>
      </Container>
      <Footer />
    </Container>
    )
  }
}

export default Random;