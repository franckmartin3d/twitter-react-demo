import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../random/Card";



class Middle extends React.Component {

// State
state = {
  cards: []
};
 
// get cards non async
// getCards = () =>{
//   // refactor fetch
//   fetch('/api/list')
  
//   //get the response and set its structure
//   .then(response=>{
//     console.log(response);
//     return response.json();
//   })
//   //use the data in structure
//   .then(json =>{
//     console.log(json);
//     this.setState({cards:json})
//   })
//   //handle errors
//   .catch(error =>{
//     console.error(error);
//   });
// }
  catchData = async () =>{
    try{
      const response= await fetch('/api/list');
      const data = await response.json();
      this.setState({cards:data})
    }
    catch(error){
      console.log("there is an error:", error)
      console.error(error);
    }
       
  
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
