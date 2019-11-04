import React, { Component } from 'react'

class EmbedResult extends Component {

    
    render() {
        console.log("prop needed for tweet: ",this.props.source)
        return (
            <div className="Container">
                   Log should not be undifined!
            </div>
        )
    }
}

export default EmbedResult
