import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

class Home extends Component {
  render(){
    return (
        <div>
            <Jumbotron />

            <Footer />
        </div>
     );
  }
  
}

export default Home;