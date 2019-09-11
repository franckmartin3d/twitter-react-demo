import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from './components/search/Middle';
import RandomNavbar from './components/random/RandomNavbar';
import Footer from './components/Footer';

class Random extends Component {
  render(){
    return (
      <body>
        <div class ="container">
          <RandomNavbar />
          <Middle />
          <Footer />
        </div>
      </body>
     );
  }
  
}

export default Random;