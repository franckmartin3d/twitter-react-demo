import React, { Component } from "react";
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

  displaySingleTweet = () => {
    this.setState( prevState =>({  
        cardToDisplay: prevState.cardToDisplay + 1  
  }));
};
  
 
  

  render() {
    let cardNumber = this.state.cardToDisplay ;
    console.log("cardnumber:" + cardNumber);
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
              onClick={this.changedisplayCards}
              type="button"
              className="btn btn-secondary">
              Display All Cards
            </button>
          {/* Display single tweet */}
          <button
              onClick={this.displaySingleTweet}
              type="button"
              className="btn btn-secondary">
              Single card
            </button>
            {/* display single card */}

            {console.log(this.state.cardToDisplay)}
            <div><Card
                  user={this.state.cards[cardNumber].user}
                  tweet={this.state.cards[cardNumber].tweet}
                  date={this.state.cards[cardNumber].date}
                /></div>
             

            {/* Display all Cards */}
            {console.log(this.state.changeyCards)}

            {this.state.displayCards === true &&
              this.state.cards.map(cards => (
                <Card
                  user={cards.user}
                  tweet={cards.tweet}
                  date={cards.date}
                />
              ))}
            {/* Display all Cards */}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
