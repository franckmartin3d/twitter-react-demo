
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed'


class Cards extends React.Component {


  componentWillUpdate= () =>{
    console.log("updating cards")
  }

  render(props) {
    return (

   
     <TwitterTweetEmbed
      tweetId={this.props.source}
      />
  


   
  );
}
}

export default Cards;



