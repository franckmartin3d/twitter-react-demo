import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchrender from './searchRender';
import Navbar from '../Navbar';
import Footer from '../Footer';
import withQuery from 'with-query';


class Search extends Component {

  // State
  state = {
    cards: [],
    searchValue: '',
    arrow: false
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
  this.handleMoreTweet();
}

  //Handle search input

  handleSearchChange = (event) =>{
    this.setState({searchValue: event.target.value});
  }

  //handle search input submit

  handleSearchSubmit =(props) =>{
    console.log(this.props.searchValue);
  }

  handleMoreTweet = () =>{
    // Set true if more than 6 cards
    if (this.state.cards.length > 6 ){
      this.setState({arrow:true})
      
    }
    console.log('arrow set to ',this.state.arrow)
  }


  render(){
    return (
      
        <div className ="container">
          <Navbar />
          <Searchrender 
            cards={this.state.cards}
            searchValue={this.state.searchValue}
            arrow={this.state.arrow}
            
            catchData={this.catchData}
            handleSearchChange={this.handleSearchChange}
            handleSearchSubmit={this.handleSearchSubmit}
          
          />
          <Footer />
        </div>
      
     );
  }
  
}

export default Search;