import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from './components/search/Middle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class Home extends Component {
  render(){
    return (
      <body>
        <div class ="container">
          <Navbar />
          <Middle />
          <Footer />
        </div>
      </body>
     );
  }
  
}

export default Home;