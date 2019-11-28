import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { addItemDetails } from "../BookItem/BookFunctions";
import Filter from "../Filter/Filter";
import { filtered } from "../Filter/FilterFunctions";
import { addItem } from "../Cart/CartFunctions";
import { addItemWish } from "../wishlist/WishlistFunctions";

class Searched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  onClick = () => {
    this.setState({ redirect: true });
  };
  clickOn = id => {
    this.props.addItem(id);
  };
  clickOnDetails = id => {
    this.props.addItemDetails(id);
  };
  clickOnWish = id => {
    this.props.addItemWish(id);
  };
  sendFilter(list) {
    this.props.sendFilter(list);
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
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/details" />;
    }
    let fitler = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="home-page-list" key={item.id}>
            <div className="container">
              <span
                className="clickAddButton"
                onClick={() => {
                  this.clickOnDetails(item.id);
                }}
              >
                <span onClick={this.onClick}>
                  <span href="#tile" className="tile">
                    <div className="item">
                      <div className="book_cover">
                        <img
                          src={item.book_cover}
                          alt="bookcover placeholder"
                          width="200"
                          height="200"
                        ></img>
                      </div>
                      <div className="details">
                        <h5 className="book_title">
                          <p>{item.book_name}</p>
                        </h5>
                        <div className="book_details">
                          <h6 className="card-subtitle mb-2 text-muted">
                            Author Bio: {item.author_biography}
                          </h6>
                          <span className="card-subtitle mb-2 text-muted">
                            Publish Date: {item.book_publishing_info + " "}
                          </span>
                          <span className="card-subtitle mb-2 text-muted">
                            Release Date: {item.book_releaseDate}{" "}
                          </span>
                          <br></br>
                          <span className="card-subtitle mb-2 text-muted">
                            Genre: {item.book_genre}{" "}
                          </span>
                          <br></br>
                          <span className="card-subtitle mb-2 text-muted">
                            Rating: {item.book_rating}
                          </span>
                          <br></br>
                          <span className="card-text">
                            {" "}
                            Publisher: {item.book_publisher}
                          </span>
                          <p className="card-text">
                            Author Name:{" "}
                            <Link
                              to={
                                "/search#" +
                                item.author_first_name +
                                item.author_last_name
                              }
                              onClick={() =>
                                this.submitFilter([
                                  item.author_first_name,
                                  item.author_last_name
                                ])
                              }
                            >
                              {item.author_first_name +
                                " " +
                                item.author_last_name}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                </span>
              </span>
              <p className="home_buttons">
                <i>Price: ${item.book_price} </i>
                <span
                  className="clickAddButton"
                  onClick={() => {
                    this.clickOn(item.id);
                  }}
                >
                  <button className="add-button" type="button">
                    Add to Cart
                  </button>
                </span>
                <span
                  className="clickAddWish"
                  onClick={() => {
                    this.clickOnWish(item.id);
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
      })
    ) : (
      <div>
        <p>No entries found.</p>
        <Link to="/#Items">
          <span href="#fitler" className="links" type="button">
            Shop Here
          </span>
        </Link>
      </div>
    );

    return (
      <div className="container">
        <div className="filter-number">
          <Filter bookdetails={this.props.all} />
          <h4>Related entries: ({this.props.items.length})</h4>
          <ul className="current-items">{fitler}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.filteredItems,
    all: state.items,
    savedItems: state.savedItems,
    searched: state.searched,
    wishlist: state.wishlist.items
  };
};

const changeItems = dispatch => {
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

export default connect(currentItems, changeItems)(Searched);
