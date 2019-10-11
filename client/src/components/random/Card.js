import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = props => {
  return (
    <div className="card" >
  <img src={props.profile} className="card-img-top" className="card-img" alt="User" />
  <div className="card-body">
    <h5 className="card-title">{props.user}</h5>
    <p className="card-text">S{props.tweet}</p>
    <small className="text-muted">{props.date}</small>
  </div>
  </div>
  );
};
export default Card;


