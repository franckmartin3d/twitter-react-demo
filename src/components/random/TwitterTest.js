import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

let cards = null;

class Body extends React.Component {
  // State
  state = {
    displayCard: false,
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
    ]
  };
 

  // displayTweet = () => {
  //   console.log("displaying tweet");
  //   this.setState({
  //     user: "new user!",
  //     tweet: "new tweet ",
  //     date: "new 9/09/99"
  //   });
  // };

  // set the display to true or false
  displayCards = () => {
    this.setState({
        displayCards: !this.state.displayCards
    })
  }
  ifMethod = () =>{
     if ( this.state.displayCard ) {
        cards = (
        <div>
           { this.state.cards.map(cards => (
              <Card
                user={cards.user}
                tweet={cards.tweet}
                date={cards.date}
                ></Card>
            ))}
        </div>
        )
      }
      }

  render() {
    let cards = null;
    return (

      <div className="App">
      <h1>Question Genie</h1>
      <button className="btn" onClick={this.displayCards}>View     Unanswered Questions</button>
       
      </div>

    )}


      // <div className="container">
      //   <div>
      //     <div className="jumbotron jumbotron-fluid text-center border-primary">
      //       <h4 className="display-4">{this.props.title}</h4>
      //       <p>Testing how to display tweets</p>
      //       {/* second prop test + state test */}
      //       <p> Number of tweets: {this.props.numberOfClick}</p>
      //       <button
      //         onClick={this.displayQuestion}
      //         type="button"
      //         className="btn btn-secondary"
      //       >
      //         Display tweet
      //       </button>
            
      //     </div>
      //   </div>
      // </div>

  //     if ( this.state.displayCard ) {
  //       cards = (
  //       <div>
  //          { this.state.cards.map(cards => (
  //             <Card
  //               user={cards.user}
  //               tweet={cards.tweet}
  //               date={cards.date}
  //               ></Card>
  //           })}
  //       </div>
  //       )
  //     }
  // }
  }
  
    
export default Body;
