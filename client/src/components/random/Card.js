import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'

const Cards = props => {
  return (
    <Card border="success" style={{ width: '18rem' }}>
 
    <Card.Img variant="top" src={props.profile} roundedCircle />
    <Card.Body>
      <Card.Title>{props.user}</Card.Title>

      <Card.Text>
      {props.tweet}
      </Card.Text>

      <Card.Text>
      {props.date}
      </Card.Text>

    </Card.Body>
  </Card>
  );
};
export default Cards;

