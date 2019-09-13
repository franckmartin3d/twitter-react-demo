import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from './components/search/Middle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class Search extends Component {
  render(){
    return (
      <body>
        <div className ="container">
          <Navbar />
          <Middle />
          <Footer />
        </div>
      </body>
     );
  }
  
}

export default Search;