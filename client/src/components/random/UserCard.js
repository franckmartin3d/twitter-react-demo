import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import "./UserCard.css";

function UserCard(props) {
  return (
    <div
      className="col"
      style={{
        padding: "10px",
        width: "60%"
      }}
    >
      <Image
       className ="user-card-image"
        // Props from StarTweet.js and callback function from StarTweet.js
        src={props.imageUrl}
        onClick={event => {
          props.select(props.username);
        }}
        roundedCircle
      />

      <h5>{props.username}</h5>
    </div>
  );
}

export default UserCard;
