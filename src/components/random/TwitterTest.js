import React, {
  Component
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";


class Body extends React.Component {
  // State

  state = {
    cards: [
      {
        user: "Donal Trump",
        tweet: "i am an idiot",
        date: "9/12/2019",
        id: 1
      },
      {
        user: "Devil",
        tweet: " I am the Neigbour of the beast",
        date: "6/06/666",
        id: 2
      },
      {
        user: "Barrack",
        tweet: " I was born in honolulu!!",
        date: "1/02/2011",
        id: 3
      }
    ],
    displayCards: false,
    cardToDisplay: 0
  };

  changedisplayCards = () => {
    this.setState({
      displayCards: !this.state.displayCards
    });
  };

  displayTweet = () => {
    console.log("displaying tweet");
    this.setState({
      user: "new user!",
      tweet: "new tweet ",
      date: "new 9/09/99"
    });
  };

  render() {


    
    return (
      <div className="container">
        <div>
          <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h4 className="display-4"> {this.props.title} </h4>
            <p> Testing how to display tweets </p>
            {/* second prop test + state test */}
            <p> Number of Cards: {this.state.cards.length} </p>
            <button
              onClick={(this.changedisplayCards)}
              type="button"
              className="btn btn-secondary"
            >
              Display Cards
            </button>
            {console.log(this.state.changeyCards)}

            { this.state.displayCards === true && this.state.cards.map(cards => (
              <Card
                user={cards.user}
                tweet={cards.tweet}
                date={cards.date}
                // key={this.props.id.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default Body;