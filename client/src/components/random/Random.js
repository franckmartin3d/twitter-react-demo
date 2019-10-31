import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Result from "./RandomRender";
import Images from "./Image";

import Navbar from "../Navbar";
import Footer from "../Footer";

import withQuery from "with-query";



class Random extends React.Component {
  // State
  state = {
    //use for selection
    selection: 'elon',
    searchValue: [],
    displayCards: true,

    //use for api data
    user: [
      "from:elonmusk",
      "from:NASA",
      "from:neiltyson",
      "from:Cmdr_Hadfield"
    ],
    userStateArray: ["elonTweet", "nasaTweet", "neilTweet", "capTweet"],

    //use for array to display tweet
    elonTweet: [],
    neilTweet: [],
    nasaTweet: [],
    capTweet: []
  };

  //  fetch on load all tweets
  componentWillMount = async () => {
    for (let i = 0; i < this.state.user.length; i++) {
      let search = this.state.user[i];
      const state = this.state.userStateArray[i];

      try {
        const response = await fetch(
          withQuery("api/list", {
            q: search
          })
        );

        const data = await response.json();

        this.setState({ [state]: data });
      } catch (error) {
        console.log("there is an error:", error);
        console.error(error);
      }
      // console.log(state)
      this.setState({ displayCards: true });
    }
    console.log("elonTweet: ", this.state.elonTweet);
    // console.log('neil: ', this.state.neilTweet);
    // console.log('nasaTweet: ', this.state.nasaTweet);
    // console.log('cap: ', this.state.cap);
  };

  //SELECTION OF PEOPLE
  selectElon = () => {
    this.setState({
      selection: "elon"
    });
    console.log("select elon function 'selection:':", this.state.selection);
  };

  selectNasa = () => {
    this.setState({
      selection: "nasa"
    });
    console.log("Select Elon Array:", this.state.selection);
  };
  

  selectNeil = () => {
    this.setState({
      searchValue: [],
      searchValue: this.state.neilTweet
    });
    console.log(this.state.searchValue);
  };

  selectCap = () => {
    this.setState({
      searchValue: [],
      searchValue: this.state.capTweet
    });
    console.log(this.state.searchValue);
  };

  //change the display state (use to display or not a component)
  displayAllCards = () => {
    this.setState({
      displayCards: true
    });
    console.log(this.state.displayCards);
  };

  //reset the cards array selected
  resetCard = () => {
    let resetArr = [];
    this.setState({
      searchValue: resetArr
    });
  };

  render() {
    return (
      <div className="Container">
        <Navbar />
        <div className="jumbotron jumbotron-fluid text-center border-primary">
          <h1 className="display-4"> Random Tweet Page </h1>
          <p>Select a user</p>

          {/* image */}
          <div>
            <Images
              // pass array of user as props
              elon={this.state.elonTweet}
              nasa={this.state.nasaTweet}
              neil={this.state.neilTweet}
              cap={this.state.capTweet}
              // pass usefull function as props
              selectElon={this.selectElon}
              selectNasa={this.selectNasa}
              selectNeil={this.selectNeil}
              selectCap={this.selectCap}
              reset={this.resetCard}
            />
          </div>
        </div>

        <Result

          // pass array of user as props
          elon={this.state.elonTweet}
          nasa={this.state.nasaTweet}
          neil={this.state.neilTweet}
          cap={this.state.capTweet}

           // pass usefull function as props
          selection={this.state.selection}
          searchValue={this.state.searchValue}
          displayCards={this.state.displayCards}
          selectElon={this.selectElon}
          selectNasa={this.selectNasa}
          selectNeil={this.selectNeil}
          selectCap={this.selectCap}
          displayAllCards={this.displayAllCards}
          reset={this.resetCard}
        />
        <Footer />
      </div>
    );
  }
}

export default Random;
