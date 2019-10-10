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
GetCards(){
  fetch('/api/list')
  .then(res => res.json())
  .then(cards => this.setState({cards}, ()=> console.log("cards fetched from internal API", cards," cards state:", this.state.cards)));
}
  

  render(){
    return(

      <div className="jumbotron jumbotron-fluid text-center border-primary">
      <h1 className="display-4">SHOWCASE</h1>
      
        {/* <!-- search --> */}
      <div className ="row">
      <div className="col-md"> </div>

        <div className="col-md">
          <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Search"/>
                      <div className="input-group-append">
                        <button 
                          className="btn btn-secondary" 
                          type="submit"
                          onClick={this.GetCards}>
                          Go</button>
                      </div>
          </div>
        </div>

        <div className="col-md"> </div>


      </div>
        {/* <!-- /search --> */}

    
        <div className="row">
          {this.state.cards.map(cards => (
            <div className = "col">
            <Card 
                  profile={cards.id} 
                  user={cards.user} 
                  tweet={cards.tweet} 
                  date={cards.date} />
                 
            </div>
             ))}
      </div>
      </div>

    );
  }
}

export default Middle;
