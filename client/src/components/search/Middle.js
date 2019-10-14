import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../random/Card";
import withQuery from 'with-query';


class Middle extends React.Component {

// State
state = {
  cards: [],
  searchValue: ''
};
 
//Send data to api
  catchData = async () =>{
    let search = this.state.searchValue
    console.log("searching for",this.state.searchValue);
    try{
      const response= await fetch(withQuery('api/list', {
        q: search,
      }))

      const data = await response.json();
      this.setState({cards:data})
    }
    catch(error){
      console.log("there is an error:", error)
      console.error(error);
    }
       
}

//Handle search input

  handleSearchChange = (event) =>{
    this.setState({searchValue: event.target.value});
}

//handle search input submit

  handleSearchSubmit =() =>{
    console.log(this.state.searchValue);
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
                      <input 
                      type="text" 
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                      className="form-control" 
                      placeholder="Search"/>

                      <div className="input-group-append">
                        <button 
                          className="btn btn-secondary" 
                          type="submit"
                          onClick={this.catchData}>
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
