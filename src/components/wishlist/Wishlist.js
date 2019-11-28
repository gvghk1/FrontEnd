import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  wishRemove,
  wishToCart,
  changeWishName,
  currentWishName,
  ////////////////////////////
  //////////////////////////////
  wishToWish
  ///////////////////////////////
  ////////////////////////////////
} from "./WishlistFunctions.js";
import "./Wishlist.css";
//import { start } from "repl";

class Wishlist extends Component {
  //https://reactjs.org/docs/forms.html
  constructor(props) {
    super(props);
    this.state = {
      value: "Pick a wishlist to view",
      valueWTW: "Pick a destination list.",
      currentWishlist: {
        // current wishlist for the drop down
        id: 0, // id number for that wishlist
        items: [], // book items saved in wishlist
        options: [], // option array
        wishlistName: "Default"
        // name of the wishlist
      }
    };
    this.handleChange = this.handleChange.bind(this); // simplified function call for handleChange
    this.handleSubmit = this.handleSubmit.bind(this); // simplified function call for handleSubmit
    this.handleSave = this.handleSave.bind(this); // simplified function call for handleSave
    this.handleWishToWishChange = this.handleWishToWishChange.bind(this); // simplified function call for handleChange
    this.handleWishToWishSubmit = this.handleWishToWishSubmit.bind(this); // simplified function call for handleSubmit
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ///For Current wishlsit
  /////////////////////////////////////////////

  // prevent refresh and change to wishlist of your choice.
  handleSubmit(event) {
    event.preventDefault();
    console.log("First Save");
    this.handleSave(event);
    this.changeCurrentWishList();
  }

  // change "value" to value of the wishlist option
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // change current wishlist of the dropdown.
  changeCurrentWishList() {
    if (this.state.value === "wishlist") {
      this.setState({ currentWishlist: this.props.wishlist }, function() {
        this.saveCurrWish();
      });
    } else if (this.state.value === "wishlist2") {
      this.setState({ currentWishlist: this.props.wishlist2 }, function() {
        this.saveCurrWish();
      });
    } else if (this.state.value === "wishlist3") {
      this.setState({ currentWishlist: this.props.wishlist3 }, function() {
        this.saveCurrWish();
      });
    }
  }
  // save list of your choice as current list.
  saveCurrWish() {
    console.log("Sending this: ", this.state.currentWishlist);
    this.props.handleSave(this.state.currentWishlist);
  }
  // save list of your choice as current list.
  handleSave(event) {
    event.preventDefault();
    console.log("Sending this: ", this.state.currentWishlist);
    this.props.handleSave(this.state.currentWishlist);
  }
  /////////////////////////////////////////////
  //////////////////////////////////////////////
  //////////////////////////////////////////////

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ///For Destination wishlist
  /////////////////////////////////////////////

  // prevent refresh and change the destination list to wishlist of your choice.
  handleWishToWishSubmit(event) {
    event.preventDefault();
    event.persist();
    this.transferItems();
  }
  // change "value" to value of the wishlist option
  handleWishToWishChange(event) {
    this.setState({ valueWTW: event.target.value });
  }
  // change dest wishlist of the dropdown.
  transferItems() {
    console.log("Current State", this.state.valueWTW);
    let itemsToMove = this.state.currentWishlist.items;
    let itemsToRemove = this.state.currentWishlist.options;
    console.log("Items to move", itemsToMove);

    //Remove items from current list
    var newWishList = itemsToRemove;
    itemsToRemove.map(
      number => (newWishList = itemsToMove.filter(item => number === item.id))
    );
    console.log("New Wishlist", newWishList);

    //Change list
    if (this.state.valueWTW === "wishlist") {
      this.setState(
        {
          ...this.state,
          currentWishlist: {
            id: this.props.wishlist.id, // id number for that wishlist
            items: this.props.wishlist.items.concat(newWishList),
            options: this.props.wishlist.options, // option array
            wishlistName: this.props.wishlist.wishlistName
          }
        },
        function() {
          this.saveCurrWish();
        }
      );
    } else if (this.state.valueWTW === "wishlist2") {
      this.setState(
        {
          ...this.state,
          currentWishlist: {
            id: this.props.wishlist2.id, // id number for that wishlist
            items: this.props.wishlist2.items.concat(newWishList),
            options: this.props.wishlist2.options, // option array
            wishlistName: this.props.wishlist2.wishlistName
          }
        },
        function() {
          this.saveCurrWish();
        }
      );
    } else if (this.state.valueWTW === "wishlist3") {
      this.setState(
        {
          ...this.state,
          currentWishlist: {
            id: this.props.wishlist3.id, // id number for that wishlist
            items: this.props.wishlist3.items.concat(newWishList),
            options: this.props.wishlist3.options, // option array
            wishlistName: this.props.wishlist3.wishlistName
          }
        },
        function() {
          this.saveCurrWish();
        }
      );
    }
  }
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////

  onChange(e) {
    // current array of options
    const options = this.state.currentWishlist.options;
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+e.target.value);
      console.log(options);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value);
      options.splice(index, 1);
      console.log(options);
    }

    // update the state with the new array of options
    //this.setState({ options: options });
  }
  clickWishToCart() {
    this.state.currentWishlist.options.map(number =>
      this.props.clickWishToCart(number)
    );
  }

  // When submit button is clicked, pass current wishlist name to the handler.
  mySubmitHandler = event => {
    event.preventDefault(); // prevent refleshing.
    event.persist();
    this.handleSave(event);
  };

  // change the name of the current wishlist.
  myChangeHandler = event => {
    event.preventDefault(); // prevent refleshing.
    event.persist();
    let change = event.target.value;
    this.setState(state => {
      return {
        ...state,
        currentWishlist: {
          ...state.currentWishlist,
          wishlistName: change
        }
      };
    });
  };
  clickRemove() {
    var newWishList = this.state.currentWishlist.items;
    this.state.currentWishlist.options.map(
      number => (newWishList = newWishList.filter(item => number !== item.id))
    );
    console.log("New List after removed:", newWishList);
    this.setState(state => {
      return {
        ...state,
        currentWishlist: {
          ...state.currentWishlist,
          items: newWishList,
          options: []
        }
      };
    });
  }

  clickAddToCart() {
    this.clickWishToCart();
    this.clickRemove();
  }
  ////////////////////////////////////////
  ///////////////////////////////////////
  // When clicked, transfer from one list to another.
  clickWishToWish = number => {
    this.props.clickWishToWish(number);
    this.props.clickRemove(number);
  };
  ////////////////////////////////////////
  ///////////////////////////////////////

  render() {
    let currentlist = this.state.currentWishlist.items.length ? (
      this.state.currentWishlist.items.map(item => {
        return (
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "10px",
              borderBottom: "1px #ccc dotted"
            }}
            key={item.id}
          >
            <div className="input-group">
              <input
                type="checkbox"
                value={item.id}
                onChange={this.onChange.bind(this)}
              />{" "}
              <span htmlFor={item.id}>{item.book_name}</span>
            </div>
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
          <h4>
            {this.state.currentWishlist.wishlistName} (
            {this.state.currentWishlist.items.length})
          </h4>
          <form onSubmit={this.mySubmitHandler} style={{ display: "flex" }}>
            <input
              type="text"
              name="wishlistName"
              style={{ flex: "10", padding: "5px" }}
              placeholder="Name your wishlist"
              onChange={this.myChangeHandler}
            />

            <input
              type="submit"
              value="submit"
              className="btn"
              style={{ flex: "1" }}
            />
          </form>

          <ul className="wishlist">{currentlist}</ul>
          <span
            className="wish-del-button"
            onClick={() => {
              this.clickRemove();
            }}
          >
            Remove
          </span>

          <span
            className="add-button"
            onClick={() => {
              this.clickAddToCart();
            }}
          >
            Add To Cart
          </span>

          <span className="add-button" onClick={this.handleSave}>
            Save Wishlist
          </span>
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose your wishlist:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="value">Pick a wishlist to view</option>
                <option value="wishlist">
                  {this.props.wishlist.wishlistName}
                </option>
                <option value="wishlist2">
                  {this.props.wishlist2.wishlistName}
                </option>
                <option value="wishlist3">
                  {this.props.wishlist3.wishlistName}
                </option>
              </select>
              <input className="add-button" type="submit" value="Go" />
            </label>
          </form>
          {/*/////////////////////////////////////*/}
          {/*/////////////////////////////////////*/}
          {/*/////////////////////////////////////*/}
          {/*//////////Another drop down for transfer from 1 wishlist to another wishlist///////////////////////////*/}
          <form onSubmit={this.handleWishToWishSubmit}>
            <label>
              Transfer to:
              <select
                value={this.state.valueWTW}
                onChange={this.handleWishToWishChange}
              >
                <option value="value">Pick a target list</option>
                <option value="wishlist">
                  {this.props.wishlist.wishlistName}
                </option>
                <option value="wishlist2">
                  {this.props.wishlist2.wishlistName}
                </option>
                <option value="wishlist3">
                  {this.props.wishlist3.wishlistName}
                </option>
              </select>
              <input className="add-button" type="submit" value="Go" />
            </label>
          </form>
          {/*/////////////////////////////////////*/}
          {/*/////////////////////////////////////*/}
          {/*/////////////////////////////////////*/}
          {/*/////////////////////////////////////*/}
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    wishlist: state.wishlist,
    wishlist2: state.wishlist2,
    wishlist3: state.wishlist3,
    items: state.items
  };
};

const changeItems = dispatch => {
  return {
    clickRemove: id => {
      dispatch(wishRemove(id)); // dispatch action wishRemove that will trigger state change.
    },
    clickWishToCart: id => {
      dispatch(wishToCart(id)); // dispatch action wishToCart that will trigger state change.
    },
    mySubmitHandler: event => {
      dispatch(changeWishName(event)); // dispatch action changeWishName that will trigger state change.
    },
    handleSave: event => {
      dispatch(currentWishName(event)); // dispatch action currentWishName that will trigger state change.
    },
    //////////////////////////////////////////
    ///////////////////////////////////////////
    //////////////////////////////////////////
    clickWishToWish: id => {
      dispatch(wishToWish(id)); // dispatch action wishToWish that will trigger state change.
    }
    ///////////////////////////////////////////
    //////////////////////////////////////////
    /////////////////////////////////////////
  };
};

export default connect(currentItems, changeItems)(Wishlist); // passing these 2 functions as props to component.
