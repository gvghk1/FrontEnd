import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQuantity,
  subtractQuantity,
  removeItem,
  saveAdd,
  saveAddToCart,
  saveRemove
} from "./CartFunctions.js";
import "./Cart.css";

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
  clickSave = id => {
    this.props.clickSave(id);
  };
  clickSaveToCart = id => {
    this.props.clickSaveToCart(id);
  };
  clickSaveRemove = id => {
    this.props.clickSaveRemove(id);
  };
  render() {
    let cart = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div class="shopping-cart" key={item.id}>
            <div class="item">
              <div class="image">
                <img
                  src={item.book_cover}
                  alt="Failed to load: book_cover"
                  width="200"
                  height="200"
                  className="image"
                />
              </div>
              <div class="description">
                <span className="card-title">
                  <b>{item.book_name}</b>
                </span>
                <i className="card-subtitle mb-2 text-muted">
                  {item.book_desc}
                </i>
                <span>
                  <i>Original Price: ${item.book_price}</i>
                </span>
              </div>
              <div class="buttons">
                <div class="item-price">
                  <h5>${item.book_price * item.quantity}</h5>
                </div>
                <div class="quantity">
                  Qty:
                  <br></br>
                  <button
                    class="qty-button"
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
                    class="qty-button"
                    type="button"
                    name="button"
                    onClick={() => {
                      this.clickSubtr(item.id);
                    }}
                  >
                    -
                  </button>
                </div>
                <br></br>
                <span
                  class="save-button"
                  onClick={() => {
                    this.clickSave(item.id);
                  }}
                >
                  Save for later
                </span>
                <br></br>
                <span
                  class="del-button"
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
      <div>
        <p>Your shopping cart is empty.</p>
        <Link to="/#Items">
          <span href="#cart" className="links" type="button">
            Shop Here
          </span>
        </Link>
      </div>
    );

    let saved = this.props.savedItems.length ? (
      this.props.savedItems.map(item => {
        return (
          <div class="shopping-cart" key={item.id}>
            <div class="item">
              <div class="image">
                <img
                  src={item.book_cover}
                  alt="Failed to load: book_cover"
                  width="100"
                  height="100"
                  className="image"
                />
              </div>
              <div class="description">
                <span className="card-title">
                  <b>{item.book_name}</b>
                </span>
              </div>
              <div class="buttons">
                <div class="item-price">
                  <h5>${item.book_price}</h5>
                </div>
                <span
                  class="save-button"
                  onClick={() => {
                    this.clickSaveToCart(item.id);
                  }}
                >
                  Add to cart
                </span>
                <br></br>
                <span
                  class="del-button"
                  onClick={() => {
                    this.clickSaveRemove(item.id);
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
      <div>
        <p>Your list is empty.</p>
      </div>
    );

    let subtotal = this.props.items.length ? (
      [
        <div class="subtotal-price">
          <b>
            <h5>Subtotal: ${this.props.total}</h5>
          </b>
        </div>
      ]
    ) : (
      <div></div>
    );

    return (
      <div className="container">
        <div className="#cart">
          <br></br>
          <h4>Shopping cart ({this.props.items.length})</h4>
          <ul className="current-items">{cart}</ul>
          <div class="shopping-cart">
            <h5>{subtotal}</h5>
          </div>
          <h5>
            <p>Save for later ({this.props.savedItems.length})</p>
          </h5>
          <ul className="current-saved">{saved}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.addedItems,
    savedItems: state.savedItems,
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
    clickSave: id => {
      dispatch(saveAdd(id));
    },
    clickSaveToCart: id => {
      dispatch(saveAddToCart(id));
    },
    clickSaveRemove: id => {
      dispatch(saveRemove(id));
    }
  };
};

export default connect(
  currentItems,
  changeItems
)(Cart);
