import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../Cart/CartFunctions";
import { addItemDetails } from "./BookFunctions";
import { addItemWish } from "../wishlist/WishlistFunctions";
import { Link, Redirect } from "react-router-dom";
import { filtered } from "../Filter/FilterFunctions";
import "./BookItem.css";

export class Bookitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  clickOn = id => {
    this.props.addItem(id);
  };
  clickOnDetails = id => {
    this.props.addItemDetails(id);
  };
  clickOnWish = id => {
    this.props.addItemWish(id);
  };
  onClick = () => {
    this.setState({ redirect: true });
  };
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
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/details" />;
    }
    let bookInfo = (
      <span href="#tile" className="tile">
        <div className="item">
          <div className="book_cover">
            <img
              src={this.props.book.book_cover}
              alt="bookcover placeholder"
              width="200"
              height="200"
            ></img>
          </div>
          <div className="details">
            <span className="book_title">{this.props.book.book_name}</span>
            <span> </span>
            <span className="released">
              ({this.props.book.book_releaseDate})
            </span>{" "}
            <p className="author">
              by{" "}
              <Link
                to={
                  "/search#" +
                  this.props.book.author_first_name +
                  this.props.book.author_last_name
                }
                onClick={() =>
                  this.submitFilter([
                    this.props.book.author_first_name,
                    this.props.book.author_last_name
                  ])
                }
              >
                {this.props.book.author_first_name +
                  " " +
                  this.props.book.author_last_name}
              </Link>
            </p>
            <div className="book_details">
              <span className="bio">
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.props.book.book_desc}
                </h6>
              </span>

              <span className="card-subtitle mb-2 text-muted">
                Genre: {this.props.book.book_genre}{" "}
              </span>
              <br></br>
              <span className="card-subtitle mb-2 text-muted">
                Rating: {this.props.book.book_rating + "/5"}
              </span>
              <br></br>
              <span className="card-text">
                {" "}
                Published by {this.props.book.book_publisher}
              </span>
            </div>
          </div>
        </div>
      </span>
    );
    return (
      <div className="home-page-list" key={this.props.book.id}>
        <div className="container">
          <span
            className="clickAddButton"
            onClick={() => {
              this.clickOnDetails(this.props.book.id);
            }}
          >
            <span onClick={this.onClick}>{bookInfo}</span>
          </span>
          <p className="home_buttons">
            <i>Price: ${this.props.book.book_price} </i>
            <span
              className="clickAddButton"
              onClick={() => {
                this.clickOn(this.props.book.id);
              }}
            >
              <button className="add-button" type="button">
                Add to Cart
              </button>
            </span>
            <span
              className="clickAddWish"
              onClick={() => {
                this.clickOnWish(this.props.book.id);
              }}
            >
              <button className="wish-button" type="button">
                Add to Wishlist
              </button>
            </span>
          </p>
        </div>
      </div>

      
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const checkCartReducer = dispatch => {
  return {
    addItem: id => {
      dispatch(addItem(id));
    },
    addItemDetails: id => {
      dispatch(addItemDetails(id));
    },
    addItemWish: id => {
      dispatch(addItemWish(id));
    },
    sendFilter: event => {
      dispatch(filtered(event));
    }
  }; 
};

export default connect(mapStateToProps, checkCartReducer)(Bookitem);
