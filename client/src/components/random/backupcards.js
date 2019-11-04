
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed'

export class Cards extends Component {


 

  componentWillUpdate= (props) =>{
    console.log("updating cards")
  }


  render(props) {



    if(this.props.source == undefined)
    return (<div className= "Container">source is undefined!</div>)

    return (

      
     <TwitterTweetEmbed
      tweetId={this.props.source}
      />
      
   
    );
  }
}

export default Cards;



