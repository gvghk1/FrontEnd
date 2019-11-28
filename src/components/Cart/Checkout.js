import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, subtractQuantity, removeItem } from "./CartFunctions.js";
import { filtered } from "../Filter/FilterFunctions";
import Popup from "./Popup";
import "./Cart.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopupPaid: false };
  }

  showPopupPaid() {
    this.setState({
      showPopupPaid: !this.state.showPopupPaid
    });
  }
  searchAuthor(name) {
    let listFirstName;
    let listLastName;
    listFirstName = this.props.items.filter(
      item => item.author_first_name === name[0]
    );
    listLastName = this.props.items.filter(
      item => item.author_last_name === name[1]
    );

    let names = listFirstName.filter(
      value => -1 !== listLastName.indexOf(value)
    );
    this.sendFilter(names);
  }

  submitFilter(name) {
    this.searchAuthor(name);
  }
  sendFilter(list) {
    this.props.sendFilter(list);
  }

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
    let cart = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="shopping-cart-list" key={item.id}>
            <div className="item">
              <div className="image">
                <img
                  src={item.book_cover}
                  alt="Failed to load: book_cover"
                  width="75"
                  height="75"
                />
              </div>
              <div className="description">
                <span className="card-title">
                  <h5 className="book_title">{item.book_name}</h5>
                  <span className="author">
                    By:{" "}
                    <b
                      className="clickAddButton"
                      onClick={() =>
                        this.submitFilter([
                          item.author_first_name,
                          item.author_last_name
                        ])
                      }
                    >
                      <Link to="/search">
                        {item.author_first_name + " " + item.author_last_name}
                      </Link>
                    </b>{" "}
                  </span>
                </span>
              </div>
              <div className="buttons">
                <div className="item-price">
                  <span>${item.book_price * item.quantity}</span>
                  <i className="item-each text-muted">
                    ${item.book_price} each
                  </i>
                </div>
              </div>
              <div className="buttons">
                <div className="quantity">
                  Qty:
                  <br></br>
                  <button
                    className="qty-button"
                    type="button"
                    name="button"
                    onClick={() => {
                      this.clickAdd(item.id);
                    }}
                  >
                    +
                  </button>
                  <b> {item.quantity} </b>
                  <button
                    className="qty-button"
                    type="button"
                    name="button"
                    onClick={() => {
                      this.clickSubtr(item.id);
                    }}
                  >
                    -
                  </button>
                </div>
                <span
                  className="del-button"
                  onClick={() => {
                    this.clickRemove(item.id);
                  }}
                >
                  Remove
                </span>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div></div>
    );

    let subtotal = this.props.items.length ? (
      [
        <div className="total-price" key="Price">
          <p>Subtotal: ${this.props.total.toFixed(2)}</p>
          <h5>
            <b>Total: ${this.props.total.toFixed(2)}</b>
          </h5>
          <span
            to="/checkout"
            className="checkout_btn"
            onClick={() => {
              this.showPopupPaid();
            }}
          >
            Pay
          </span>
          {this.state.showPopupPaid ? (
            <Link to="/">
              <Popup
                text="Thank you for paying!"
                closePopup={this.showPopupPaid.bind(this)}
              />
            </Link>
          ) : null}
        </div>
      ]
    ) : (
      <div></div>
    );

    let checkitem = this.props.items.length ? (
      [
        <div className="checkout-list">
          <br></br>
          <div className="review-list">
            <h5>Pay with</h5>
            {"[Not Implemented]"}
            <ul className="current-saved">{}</ul>
            <h5>Ship to </h5>
            {"[Not Implemented]"}
            <h5>Review items ({this.props.items.length})</h5>
            <ul className="current-items">{cart}</ul>
            <Link to="/cart#review">
              <span href="#cart" className="links" type="button">
                Go Back
              </span>
            </Link>
          </div>
          <div className="review-list">{subtotal}</div>
        </div>
      ]
    ) : (
      <div>
        <br></br>
        <p>There are no items in your order.</p>
        <Link to="/#Items">
          <span href="#cart" className="links" type="button">
            Go Back
          </span>
        </Link>
      </div>
    );
    return <div className="container">{checkitem}</div>;
  }
}
const currentItems = state => {
  return {
    items: state.addedItems,
    savedItems: state.savedItems,
    wishlist: state.wishlist.items,
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
    },
    sendFilter: event => {
      dispatch(filtered(event));
    }
  };
};

export default connect(currentItems, changeItems)(Checkout);
