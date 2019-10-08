import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, subtractQuantity, removeItem } from "./CartFunctions.js";
import missing_img from "./cover.png";

class Cart extends Component {
  clickRemove = id => {
    this.props.clickRemove(id);
  };
  clickAdd = id => {
    this.props.clickAdd(id);
  };
  clickSubtr = id => {
    this.props.clickSubtr(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="item-in-cart">
            <div className="container">
              <li className="collection-item avatar" key={item.id}>
                <div className="item-details">
                  <span className="title">Title: {item.book_name}</span>
                  <div className="item-img">
                    <img src={missing_img} alt={missing_img} className="" />
                  </div>
                  <div className="add-remove">
                    <p></p>
                  </div>
                </div>
              </li>
              <ul className="right">
                <li>
                  <b>Price: ${item.book_price}</b>
                </li>
                <li>
                  <span
                    className="clickAdd"
                    onClick={() => {
                      this.clickAdd(item.id);
                    }}
                  >
                    <Link to="/cart">
                      <i className="upItem"> + </i>
                    </Link>
                  </span>
                  <b>Quantity: {item.quantity}</b>
                  <span
                    className="clickSubtr"
                    onClick={() => {
                      this.clickSubtr(item.id);
                    }}
                  >
                    <Link to="/cart">
                      <i className="downItem"> - </i>
                    </Link>
                  </span>
                  <br></br>
                  <span
                    className="clickRemove"
                    onClick={() => {
                      this.clickRemove(item.id);
                    }}
                  >
                    <button className="delete-button">Delete</button>
                  </span>
                </li>
              </ul>
              <ul className="center">
                <b>{item.book_desc}</b>
              </ul>
            </div>
          </div>
        );
      })
    ) : (
      <div>
        <p>Your shopping cart is empty.</p>
        <Link to="/#Items"> Shop Here</Link>
      </div>
    );
    return (
      <div className="container">
        <div className="#cart">
          <h4>Items in Cart:</h4>
          <ul className="current-items">{addedItems}</ul>
          <ul className="current-total">Total: {this.props.total}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.addedItems,
    total: state.total
  };
};
const changeItems = dispatch => {
  return {
    clickRemove: id => {
      dispatch(removeItem(id));
    },
    clickAdd: id => {
      dispatch(addQuantity(id));
    },
    clickSubtr: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(
  currentItems,
  changeItems
)(Cart);
