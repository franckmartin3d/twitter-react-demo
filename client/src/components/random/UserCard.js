import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

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
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          height: "auto",
          width: "50%",
          cursor: "pointer",
          backgroundColor: "white",
          boxShadow:
            "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          // Background changes is not working wondering why?
          "&:hover": {
            backgroundColor: "red"
          }
        }}
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
