import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Card";


class RandomRender extends React.Component {
 
  render(props) {
 
    return (
      <div className="container">
        {/* Test Body */}
        <div>
          <div className="jumbotron jumbotron-fluid text-center border-primary">
            <h4 className="display-4"> {this.props.title} </h4>
            <p> Display Tweet From these User </p>
            <p> Number of Cards: {this.props.cards.length} </p>

            {/* Display all button */}
            <button
              onClick={(event) => {this.props.selectElon();this.props.catchData()}}
              type="button"
              className="btn btn-secondary"
            >
              Elon Musk
            </button>
            <button
              onClick={(event) => {this.props.selectNasa();this.props.catchData()}}
              type="button"
              className="btn btn-secondary"
            >
              N.A.S.A
            </button>

            <button
                onClick={(event) => {this.props.selectNeil();this.props.catchData()}}
              type="button"
              className="btn btn-secondary"
            >
            Neil D
            </button>

            <button
                onClick={(event) => {this.props.selectCap();this.props.catchData();}}
              type="button"
              className="btn btn-secondary"
            >
            Chris Hadfield
            </button>


            {/* Display all Cards */}
          <div className="row">
          {this.props.displayCards === true &&
              this.props.cards.map(cards => (
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
        </div>
      </div>
    );
  }
}

export default RandomRender;
