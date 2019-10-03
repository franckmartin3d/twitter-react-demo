import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

class Body extends React.Component {
  // State
  state = {
    selectedCards:[],
    cards: [],
    displayCards: false,
    singleCard:1,
  };

  // life cycle of component
  componentDidMount(){
    fetch('/api/list')
    .then(res => res.json())
    .then(cards => this.setState({cards}, ()=> console.log("cards fetched from internal API", cards)));
  }

  //display all cards at once
  isDisplayAllCards = () => {
    let cardsArray = this.state.cards;
    let newArray = []
    for (let i = 0; i < cardsArray.length; i++) {
      const element = cardsArray[i];
      newArray.push(element)
    }
    this.setState({
      displayCards: !this.state.displayCards,
      selectedCards: newArray
    });
    console.log(this.state.selectedCards);
  };

  //reset the cards array selected
  resetCard = () => {
    let resetArr = []
    this.setState({
      selectedCards: resetArr
    });
  }

  //display one card
  isDisplaySingleCard = () => {
    this.resetCard();
    let cardsArray = this.state.cards;
    let number = this.state.singleCard;
    let newArray = []

    for (let i = 0; i < number ; i++) {
      const element = cardsArray[i];

      // to make sure the button doesnt it undefine
      if (element == undefined){
        this.setState({
          singleCard: 1
        })
      }
      else {
        console.log(element);
        newArray.push(element)
      }
      
    }
    this.setState(prevState => ({
      displayCards: true,
      selectedCards: newArray,
      singleCard: prevState.singleCard + 1
    }));
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
              this.state.selectedCards.map(cards => (
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
