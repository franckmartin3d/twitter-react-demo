import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TwitterTweetEmbed} from 'react-twitter-embed'


class EmbedResult extends Component {

    componentWillUpdate= (props) =>{
        console.log("updating cards")
      }
    
    render(props) {
        console.log("prop needed for tweet: ",this.props.source)
        return (
            <div className="Container">
                   Loading Tweets...
                   <TwitterTweetEmbed
                        tweetId={this.props.source} key={this.props.key}
                    />
            </div>
        )
    }
}

export default EmbedResult
