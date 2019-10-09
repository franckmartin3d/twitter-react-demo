import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../random/Card";



class Middle extends React.Component {

// State
state = {
  cards: [ {
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
  },
  {
    user: "scorpion",
    tweet: "get over here",
    date: "1/02/2011",
    id: 4
  },
  {
    user: "ovechkin",
    tweet: "I score machine",
    date: "1/02/2011",
    id: 5
  },
  {
    user: "Canuck",
    tweet: "we suck",
    date: "1/02/2011",
    id: 6
  }]
};
 
// life cycle of component
// componentDidMount(){
//   fetch('/api/list')
//   .then(res => res.json())
//   .then(cards => this.setState({cards}, ()=> console.log("cards fetched from internal API", cards," cards state:", this.state.cards)));
// }
  

  render(){
    return(

        <div className="col-md m-2">
          {/* <!-- card --> */}
          <Card 
                profile={this.state.cards[5].user} 
                user={this.state.cards[5].user} 
                tweet={this.state.cards[5].tweet} 
                date={this.state.cards[5].date} />
          {/* <!-- /card --> */}
        </div>

    );
  } 
    
    
   
}

export default Middle;
