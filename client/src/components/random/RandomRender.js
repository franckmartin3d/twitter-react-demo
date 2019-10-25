import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Card";


class RandomRender extends React.Component {
 
  render(props) {
 
    return (
     
          <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h1 className="display-4"> {this.props.title} </h1>
            <p> Display Tweet From these User </p>
            <p> Number of Cards: {this.props.cards.length} </p>

            {/* Display all button */}
            <button
              onClick={(event) => {this.props.selectElon();this.props.displayAllCards()}}
              type="button"
              className="btn btn-secondary mx-4"
            >
              Elon Musk
            </button>
            <button
              onClick={(event) => {this.props.selectNasa();this.props.displayAllCards()}}
              type="button"
              className="btn btn-secondary mx-4"
            >
              N.A.S.A
            </button>

            <button
                onClick={(event) => {this.props.selectNeil();this.props.displayAllCards()}}
              type="button"
              className="btn btn-secondary mx-4"
            >
            Neil D
            </button>

            <button
                onClick={(event) => {this.props.selectCap();this.props.displayAllCards()}}
              type="button"
              className="btn btn-secondary mx-4"
            >
            Chris Hadfield
            </button>


            {/* Display all Cards */}
          <div className="row">
          {this.props.displayCards === true &&
              this.props.searchValue.map(cards => (
            <div className = "col">
            <Cards
                  profile={cards.user.profile_image_url} 
                  user={cards.user.screen_name} 
                  tweet={cards.text} 
                  date={cards.created_at} />
                 
            </div>
             ))}
            </div>
            {/* Display all Cards */}
          </div>
     
    );
  }
}

export default RandomRender;
