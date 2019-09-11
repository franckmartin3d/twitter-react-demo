import React,{ Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route
}from 'react-router-dom';

// App components
import Home from './Home';
import Search from './Search';


class App extends Component {
  render(){
    return (
    <BrowserRouter>
       <Route  exact path="/" component={Home}/>
       <Route path="/Search" component={Search}/>

    </BrowserRouter>
    
     );
  }
  
}

export default App;
