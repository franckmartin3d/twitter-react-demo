import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function handleClick() {
  console.log("Clicked on test Button");
}

function randombody() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center border-primary">
        <h1 className="display-4">Button Test Page</h1>
        <p>Testing how to display tweets</p>
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
        >
          Test Button
        </button>
      </div>

      {/* Card */}
      <div className="card">
        <img src="/img/jay.png" className="card-img-top" alt="twiter user" />
        <div className="card-body">
          <h5 className="card-title">Twitter Account</h5>
          <p className="card-text">Tweet content.</p>
        </div>
      </div>
    </div>
  );
}
export default randombody;
