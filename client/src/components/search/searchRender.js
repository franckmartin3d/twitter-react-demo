import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EmbedResult from "../random/EmbedResult";



class Searchrender extends React.Component {
  render(props) {
    return (
      <div className="jumbotron jumbotron-fluid text-center border-primary">
        <h1 className="display-4">SHOWCASE</h1>

        {/* <!-- search --> */}
        <div className="row">
          <div className="col-md"> </div>

          <div className="col-md">
            <div className="input-group mb-3">
              <input
                type="text"
                value={this.props.searchValue}
                onChange={this.props.handleSearchChange}
                className="form-control"
                placeholder="Search"
              />

              <div className="input-group-append">
                <button
                  className="btn btn-secondary"
                  type="submit"
                  onClick={this.props.catchData}
                >
                  Go
                </button>
              </div>
            </div>
          </div>

          <div className="col-md"> </div>
        </div>

        {/* <!-- /search --> */}
        <div className="row">
          {this.props.cards.map(cards => (
            <div className="col">
            console.log("this is the tweets parameter in .map: ", tweets);
              <EmbedResult
                source={cards.user.id_str}
              />
            </div>
          ))}
          {/*  */}
          {/* <div>{button}</div> */}
        </div>
      </div>
    );
  }
}

export default Searchrender;
