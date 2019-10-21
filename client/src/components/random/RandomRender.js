import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import withQuery from 'with-query';


class RandomRender extends React.Component {
  // State
  state = {
    cards: [],
    searchValue: '',
    displayCards: false,
  };

 //Send data to api
 catchData = async () =>{
  let search = this.state.searchValue
  try{
    const response= await fetch(withQuery('api/list', {
      q: search,
    }))

    const data = await response.json();
    this.setState({cards:data,displayCards:true});
  }
  catch(error){
    console.log("there is an error:", error)
    console.error(error);
  } 
console.log(this.state.cards)
}


//SELECTION OF PEOPLE
  selectElon = () =>{
    this.setState({
      searchValue: "from:elonmusk",
    });
    console.log(this.state.searchValue);
  }

  selectNasa = () =>{
    this.setState({
      searchValue: "from:NASA",
    });
    console.log(this.state.searchValue);
  }

  selectNeil = () =>{
    this.setState({
      searchValue: "from:neiltyson",
    });
    console.log(this.state.searchValue);
  }

  selectCap = () =>{
    this.setState({
      searchValue: "from:Cmdr_Hadfield",
    });
    console.log(this.state.searchValue);
  }

  displayCards =() =>{
    this.setState({
          displayCards: true
        });

  }

  //reset the cards array selected
  resetCard = () => {
    let resetArr = []
    this.setState({
      selectedCards: resetArr
    });
  }

  render() {
 
    return (
      <div className="container">
        {/* Test Body */}
        <div>
          <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h4 className="display-4"> {this.props.title} </h4>
            <p> Display Tweet From these User </p>
            <p> Number of Cards: {this.state.cards.length} </p>

            {/* Display all button */}
            <button
              onClick={(event) => {this.selectElon();this.catchData();}}
              type="button"
              className="btn btn-secondary"
            >
              Elon Musk
            </button>
            <button
              onClick={(event) => {this.selectNasa();this.catchData();}}
              type="button"
              className="btn btn-secondary"
            >
              N.A.S.A
            </button>

            <button
                onClick={(event) => {this.selectNeil();this.catchData();}}
              type="button"
              className="btn btn-secondary"
            >
            Neil D
            </button>

            <button
                onClick={(event) => {this.selectCap();this.catchData();}}
              type="button"
              className="btn btn-secondary"
            >
            Chris Hadfield
            </button>


            {/* Display all Cards */}
          <div className="row">
          {this.state.displayCards === true &&
              this.state.cards.map(cards => (
            <div className = "col">
            <Card 
                  profile={cards.user.profile_image_url} 
                  user={cards.user.screen_name} 
                  tweet={cards.text} 
                  date={cards.created_at} />
                 
            </div>
             ))};
            </div>
            {/* Display all Cards */}
          </div>
        </div>
      </div>
    );
  }
}

export default RandomRender;
