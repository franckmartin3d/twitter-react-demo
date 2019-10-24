import React from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

    function Jumbo(props) {
    return (
        <Jumbotron>
            <h1>{props.title}</h1>
            <p>
               {props.para}
            </p>
            <p>
            <ButtonToolbar>

                <Button 
                    variant="outline-dark"
                    size="lg"
                    as= {Link} to="/search">
                    Search Twitter
                </Button>
               '  '     
                <Button 
                    variant="outline-dark"
                    size="lg"
                    as= {Link} to="/random">
                    Random Twitter
                </Button>

            </ButtonToolbar>
            </p>
        </Jumbotron>
        
    );
}
export default Jumbo;


