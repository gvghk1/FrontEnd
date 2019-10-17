import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Wishlist extends Component {
  clickRemove = id => {
    this.props.clickRemove(id);
  };

  render() {
    let addedItemID = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="slot" key={item.id}>
            <Link to="/#Items">
              <a href="#cart" class="links" type="button">
                Back to Home Page
              </a>
            </Link>
          </div>
        );
      })
    ) : (
      <div>
        <p>This page occurs if nothing is here.</p>
      </div>
    );
    return (
      <div className="container">
        <div className="#cart">
          <h4>Wishlist:</h4>
          <ul className="current-items">{addedItemID}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.addedItemID,
    total: state.total
  };
};

export default connect(currentItems)(Wishlist);
