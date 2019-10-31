import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from 'react-bootstrap/Container'


class Result extends React.Component {

  //Select the state array that will display the tweet string
  selector = (props) =>{
    let  userSelection = [];
    if (this.props.selection == "elon"){
      userSelection = this.props.elon;
    }else if (this.props.selection == "nasa") {
      userSelection = this.props.nasa;
      
    }else{
      userSelection = ["this.props.selection is equal to nothing, userSelection will be invalid"]
    }
    console.log("selection:",this.props.selection)
    console.log("userSelection value :",userSelection)
    return userSelection
    
    }


  render(props,userSelection) {
    this.selector();
    
    // Failsafe on userSelection variable
    if(userSelection == undefined)
        return (<Container>userSelection is undefined!</Container>)
    

    return (
      <div className="jumbotron jumbotron-fluid text-center border-primary">
        <p> result </p>

        {/* Display all Cards */}
        <div className="Container">
          <div className="Row">
            
              {this.props.displayCards === true &&
                userSelection.map(cards => (
                  <Cards source={cards.id_str} />
                ))}
            
          </div>
          {/* Display all Cards */}
        </div>
      </div>
    );
  }
}

export default Result;
