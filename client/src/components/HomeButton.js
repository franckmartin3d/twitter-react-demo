import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class HomeButtons extends Component {
    render(props) {
        
        return(
        <div className="row"style={
            {
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            margin: "20px",
            }}>
                
            <Button 
                variant="outline-dark"
                size="lg"
                as= {Link} to={this.props.link}>
                {this.props.buttonTitle}
            </Button>
        </div>
        
        
        )
    };
}
export default HomeButtons;


