import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../random/Card";



class Middle extends React.Component {

// State
state = {
  selectedCards:[],
  cards: [],
  displayCards: false,
  singleCard:1,
};

// life cycle of component
componentDidMount(){
  fetch('/api/list')
  .then(res => res.json())
  .then(cards => this.setState({cards}, ()=> console.log("cards fetched from internal API", cards," cards state:", this.state.cards)));
}
  

  render(){
    return(
<div className="jumbotron jumbotron-fluid text-center border-primary">
    <h1 className="display-5">Twitter Search</h1>

    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          {/* <!-- search --> */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="submit">
                Go
              </button>
            </div>
          </div>
          {/* <!-- /search --> */}
        </div>
        <div className="col-sm"></div>
      </div>
    </div>

    {/* <!-- Grid 3 rows x 6 columns (2 arrow 12 tweet)  -->*/}

    <div>
      {/* <!-- row2 --> */}
      <div className="row">
        <div className="col-md m-2">
          <img
            src="/img/left-arrow.png"
            className="img-fluid  max-width: 30%; height: auto;"
            alt="left arrow"
          />
        </div>
        <div className="col-md m-2">
          {/* <!-- card --> */}
          <div className="card">
            <img
              src="/img/jay.png"
              className="card-img-top"
              alt="twiter user"
            />
            <div className="card-body">
              <h5 className="card-title">Twitter Account</h5>
              <p className="card-text">Tweet content.</p>
            </div>
          </div>
          {/* <!-- /card --> */}
        </div>
        <div className="col-md m-2">
          {/* <!-- card --> */}
          <div className="card">
            <img
              src="/img/jay.png"
              className="card-img-top"
              alt="twiter user"
            />
            <div className="card-body">
              <h5 className="card-title">Twitter Account</h5>
              <p className="card-text">Tweet content.</p>
            </div>
          </div>
          {/* <!-- /card --> */}
        </div>
        <div className="col-md m-2">
          {/* <!-- card --> */}
          <div className="card">
            <img
              src="/img/jay.png"
              className="card-img-top"
              alt="twiter user"
            />
            <div className="card-body">
              <h5 className="card-title">Twitter Account</h5>
              <p className="card-text">Tweet content.</p>
            </div>
          </div>
          {/* <!-- /card --> */}
        </div>
        <div className="col-md m-2">
          {/* <!-- card --> */}
          <Card 
          profile= {this.state.cards} 
          user={this.state.cards} 
          tweet={this.state.cards} 
          date={this.state.cards} />
          {/* <!-- /card --> */}
        </div>
        <div className="col-md m-2">
          <img
            src="/img/right-arrow.png"
            className="img-fluid  max-width: 30%; height: auto;"
            alt="right arrow"
          />
        </div>
      </div>
    </div>
  </div>
    );
  } 
    
    
   
}

export default Middle;
