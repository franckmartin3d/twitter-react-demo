import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

// Fake twitter data
const tdata = {
  created_at: "Wed Oct 10 20:19:24 +0000 2018",
  id: 1050118621198921728,
  id_str: "1050118621198921728",
  text:
    "To make room for more expression, we will now count all emojis as equal—including those with gender‍‍‍ ‍‍and skin t… https://t.co/MkGjXf9aXm",
  user: {},
  entities: {}
};



// displaying tweet
function displaytweet() {
  const card = document.getElementById("text");

  const properties = Object.keys(tdata);

  properties.forEach(function(property) {
    const listItemEl = document.createElement("LI");
    const textNode = document.createTextNode(property + ": " + tdata[property]);
    listItemEl.appendChild(textNode);

    card.appendChild(listItemEl);
  });
}

// Rendering function jsx
const Body = props => {
  return (
    <div className="container">
      <div>
        <div className="jumbotron jumbotron-fluid text-center border-primary">
          <h4 className="display-4">{props.title}</h4>
          <p>Testing how to display tweets</p>
          {/* second prop test + state test */}
          <p> Number of tweets: {props.numberOfClick}</p>
          <button
            onClick={displaytweet}
            type="button"
            className="btn btn-secondary"
          >
            Test Button
          </button>
        </div>
        <div>
          {/* CARDS */}


          {props.initialTweetData.map(
            tweet =>   <Card
            user={tweet.user}
            tweet={tweet.tweet}
            date={tweet.tweetDate}
            key={tweet.id.toString()}
          />
          )}
       
        </div>
      </div>
    </div>
  );
};

export default Body;
