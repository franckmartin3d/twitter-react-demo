import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

class Body extends React.Component {
  // State
  state = {
    selectedCards:[],
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
  };

  isDisplayAllCards = () => {
    let cardsArray = this.state.cards;
    let newArray = []
    for (let i = 0; i < cardsArray.length; i++) {
      const element = cardsArray[i];
      console.log(element);
      this.setState({
        selectedCards: [].concat(this.state.selectedCards).push(element)
      });
    }

    this.setState({
      displayCards: !this.state.displayCards,
    });
    console.log(this.state.selectedCards);
  };

  isDisplaySingleCard = () => {
    this.setState({
      displaySingleCard: !this.state.displaySingleCard
    });
  };

  isDisplaySingleCard = () => {
    this.setState({
      displaySingleCard: !this.state.displaySingleCard
    });
  };

  render() {
 
    return (
      <div className="container">
        {/* Test Body */}
        <div>
          <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h4 className="display-4"> {this.props.title} </h4>
            <p> Testing how to display tweets </p>
            <p> Number of Cards: {this.state.cards.length} </p>
            {/* Display all button */}
            <button
              onClick={this.isDisplayAllCards}
              type="button"
              className="btn btn-secondary"
            >
              Display All Cards
            </button>
            {/* Display single tweet */}
            <button
              onClick={this.isDisplaySingleCard}
              type="button"
              className="btn btn-secondary"
            >
              Single card
            </button>

            {/* addcard button */}
            <button
              onClick={this.addOneCard}
              type="button"
              className="btn btn-secondary"
            >
            Add a card
            </button>


            {/* Display all Cards */}

            {this.state.displayCards === true &&
              this.state.cards.map(cards => (
                <Card user={cards.user} tweet={cards.tweet} date={cards.date} />
              ))}

            {/* Display all Cards */}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
