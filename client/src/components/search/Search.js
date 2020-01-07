import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import withQuery from 'with-query';
import SearchForm from "./SearchForm";
import EmbedResult from "../random/EmbedResult";


class Search extends Component {

  // State
  state = {
    result: [],
    searchValue: '',
    arrow: false,
    displaytweet: false
  };

 //Send data to api
 catchData = async () =>{
  let search = this.state.searchValue
  try{
    const response= await fetch(withQuery('api/list', {
      q: search,
    }))

    const data = await response.json();
    this.setState({
      result:data,
      displaytweet: true
    })

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
    if (this.state.result.length > 6 ){
      this.setState({arrow:true})
      
    }
  }


  render(){
    return (
      
      // Navbar
        
        <div className ="container">
          <Navbar />

          {/* Jumbotron */}
          <div className="jumbotron jumbotron-fluid text-center border-primary">
          <h1
            className="main-title">
            Search Tweets
          </h1>
          <p>Search for Tweets</p>
        <section className="bg-1">
            <div>
                <SearchForm 
                  searchValue={this.state.searchValue}
                  handleSearchChange={this.handleSearchChange}
                  catchData={this.catchData}
                />
            </div>
        </section>
      
        {/* result section */}

        <section className="bg-1">
                <div className="row">

                {
                this.state.displaytweet === true && this.state.result.length > 0 
                  ? this.state.result.map(tweets => {
                      return (<EmbedResult source={tweets.id_str} key={tweets.id_str} />);
                    })
                  : console.log("this.state.tweets is empty")
               }
                        
                </div>
            </section>


        
         
        </div>
        <Footer />
      </div>
     );
  }
  
}

export default Search;