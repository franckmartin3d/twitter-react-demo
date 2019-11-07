import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

export class UserCard extends Component {
  componentWillUpdate = props => {
    console.log("updating cards");
  };

  render() {
    return (
      <div
        className="col" style={
            {
            padding: "10px",
            width: "60%",
       
          }}


      
      >
        <Image style={
            {
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            height: "auto",
            width: "50%",
            backgroundColor: "white",
            boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          src={this.props.imageUrl}
          onClick={event => {
            this.props.select(this.props.username);
          }}
          roundedCircle
        />

        <h5>{this.props.username}</h5>
      </div>
    );
  }
}

export default UserCard;
