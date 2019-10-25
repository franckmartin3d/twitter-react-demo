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
    searchValue: [],
    displayCards: true,

    user: ["from:elonmusk","from:NASA","from:neiltyson","from:Cmdr_Hadfield"],
    userStateArray: ['elonTweet','nasaTweet',"neilTweet",'capTweet'],
    elonTweet:[],
    neilTweet:[],
    nasaTweet:[],
    capTweet:[],

  };

//  fetch on load all tweets
componentDidMount = async ()=> {


  for (let i = 0; i < this.state.user.length; i++) {
    let search = this.state.user[i];
    const state = this.state.userStateArray[i];

    try{
      const response= await fetch(withQuery('api/list', {
        q: search,
      }))
  
      const data = await response.json();

      this.setState({[state]:data});
    }
    catch(error){
      console.log("there is an error:", error)
      console.error(error);
    } 
    console.log(state)
    this.setState({displayCards:true});
    }
    console.log('elonTweet: ', this.state.elonTweet);
    console.log('neil: ', this.state.neilTweet);
    console.log('nasaTweet: ', this.state.nasaTweet);
    console.log('cap: ', this.state.cap);
  }

  

  logall = () =>{
    console.log("elon:",this.state.elonTweet)
  }

  //SELECTION OF PEOPLE
  selectElon = () =>{
    this.setState({
      searchValue: [],
      searchValue: this.state.elonTweet,
    });
    console.log(this.state.searchValue);
  }

  selectNasa = () =>{
    this.setState({
      searchValue: [],
      searchValue: this.state.nasaTweet,
    });
    console.log(this.state.searchValue);
  }

  selectNeil = () =>{
    this.setState({
      searchValue: [],
      searchValue: this.state.neilTweet,
    });
    console.log(this.state.searchValue);
  }

  selectCap = () =>{
    this.setState({
      searchValue: [],
      searchValue: this.state.capTweet,
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
      
      <div className="Container">
        <Navbar />
        <RandomRender
          title="Random Tweet Page"
          cards={this.state.cards}

          elon={this.state.cards}

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
     
   
      
    );
  }
}

export default Random;
