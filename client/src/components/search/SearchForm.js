import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchForm extends Component {
  render() {
    return (
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
    );
  }
}

export default SearchForm;
