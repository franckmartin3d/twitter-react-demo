import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from './components/Jumbotron';
import Footer from './components/Footer';

class Home extends Component {
  render(){
    return (
        <div>
            <Jumbo 
            title= "Twitter Showcase"
            para = "This is a simple app that use the react framework to showcase some twitter account"
            />
            
            <Footer />
        </div>
     );
  }
  
}

export default Home;