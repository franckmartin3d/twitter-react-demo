import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export class UserCard extends Component {
  componentWillUpdate = props => {
    console.log("updating cards");
  };

  render() {
    return (
      <div className="row">
        <div className="col-6" style={{color: "red"}}>
          <Image
            src={this.props.imageUrl}
            onClick={event => {
              this.props.select(this.props.username);
            }}
            roundedCircle
          />
          <h3>{this.props.username}</h3>
        </div>
      </div>
    );
  }
}

export default UserCard;
