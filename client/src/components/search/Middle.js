import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../random/Card";



class Middle extends React.Component {

// State
state = {
  cards: []
};
 
// life cycle of component
getCards = () =>{
  fetch('/api/list')
  .then(res => res.json())
  .then(data => this.setState({cards:data}))
  
  console.log(this.state.cards);
}
testGetCard(){
  
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
                          onClick={this.getCards}>
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
                  profile={cards.user.profile_image_url} 
                  user={cards.user.screen_name} 
                  tweet={cards.text} 
                  date={cards.created_at} />
                 
            </div>
             ))}
      </div>
      </div>

    );
  }
}

export default Middle;
