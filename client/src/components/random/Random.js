import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomRender from "./RandomRender";
import Navbar from '../Navbar';
import Footer from "../Footer";

import withQuery from 'with-query';


// array of objects 


class Random extends React.Component {

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

  displayAllCards =() =>{
    this.setState({
          displayCards: true
        });
    console.log(this.state.displayCards);

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
      <body>
        <div className="Container">
        <Navbar />
        <RandomRender
          title="Random Tweet Page"
          cards={this.state.cards}
          searchValue={this.state.searchValue}
          displayCards = {this.state.displayCards}
          
          catchData={this.catchData}
          selectElon = {this.selectElon}
          selectNasa = {this.selectNasa}
          selectNeil = {this.selectNeil}
          selectCap = {this.selectCap}
          displayAllCards = {this.displayAllCards}


        />
      
      </div>
      <Footer />
      </body>
      
    );
  }
}

export default Random;
