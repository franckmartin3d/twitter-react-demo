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
    displaySingleCard: false,
    displayNextCard: false,
    displayAllCards: false,
    cardToDisplay: 0
  };

  isDisplayAllCards = () => {
    this.setState({
      displayAllCards: !this.state.displayAllCards
    });
  };

  isDisplaySingleCard = () => {
    this.setState({
      displaySingleCard: !this.state.displaySingleCard
    });
  };



  addSingleCard = () => {
    this.setState( prevState =>
      ({cardToDisplay: prevState.cardToDisplay + 1
    }));
    console.log("changes in addSinglecard" + this.state.cardToDisplay);
  }

  addOneCard = () => {
    let cardIndex = this.state.cardToDisplay;
    let cardArray = this.state.cards;

    for (let i = 0; i <= (cardIndex) ; i++) {
      const element = cardArray[i];
      console.log(element);

    //   <p>How do i print this</p>
    // <div><Card
    //   user={cardArray[i].user}
    //   tweet={cardArray[i].tweet}
    //   date={cardArray[i].date}
    // /></div>

      
    }
    
    this.addSingleCard();
  }



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
              onClick={this.isDisplayAllCards}
              type="button"
              className="btn btn-secondary">
              Display All Cards
            </button>
          {/* Display single tweet */}
          <button
              onClick={this.isDisplaySingleCard}
              type="button"
              className="btn btn-secondary">
              Single card
            </button>

            {/* addcard button */}
            <button
              onClick={this.addOneCard}
              type="button"
              className="btn btn-secondary">
              +1 card
            </button>
           
            {/*  render one card*/}

            {/* display single card */}

           
            {this.state.displaySingleCard === true &&
            <div><Card
                  user={this.state.cards[cardNumber].user}
                  tweet={this.state.cards[cardNumber].tweet}
                  date={this.state.cards[cardNumber].date}
                /></div>
            }
            {/* Add 1 card to display */}
           

            {/* Display all Cards */}
           

            {this.state.displayAllCards === true &&
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
