import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { wishRemove } from "./WishlistFunctions";
import "./Wishlist.css";

class Wishlist extends Component {
  handleChange = id => {
    this.props.clickRemove(id);
    console.log("Remove Active %d", id);
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        items: this.props.items.filter(li => !li.value)
      };
    });
  };
  render() {
    let wishlist = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "10px",
              borderBottom: "1px #ccc dotted"
            }}
            key={item.id}
          >
            <input
              type="checkbox"
              id={item.id}
              checked={item.value}
              onChange={() => {
                this.handleChange(item.id);
              }}
            />{" "}
            <name htmlFor={item.id}>{item.book_name}</name>
          </div>
        );
      })
    ) : (
      <div>
        <p>Your wishlist is empty.</p>
        <Link to="/#Items">
          <span href="#cart" className="links" type="button">
            Shop Here
          </span>
        </Link>
      </div>
    );

    return (
      <div className="container">
        <div className="#cart">
          <br></br>
          <h4>Wishlist ({this.props.items.length})</h4>
          <ul className="wishlist">{wishlist}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.wishlist
  };
};

const changeItems = dispatch => {
  return {
    clickRemove: id => {
      dispatch(wishRemove(id));
    }
  };
};

export default connect(
  currentItems,
  changeItems
)(Wishlist);
