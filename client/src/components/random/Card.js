import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = props => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="./img/ecma.png" className="card-img" alt="User" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.user}</h5>
            <p className="card-text">{props.tweet}</p>
            <p className="card-text">
              <small className="text-muted">{props.date}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
