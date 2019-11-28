import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Ratingsystem } from "../Ratingsystem/Ratingsystem";
import "./BookInfo.css";
import { currentWishName } from "../wishlist/WishlistFunctions.js";
import { filtered } from "../Filter/FilterFunctions";
import Popup from "./Bookpop";

var libro;

class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {showPopupImg:false};
    this.state = {
      showPopup: false,
      value: "wishlist",
      currentWishlist: {
        // current wishlist for the drop down
        id: 0, // id number for that wishlist
        items: [], // book items saved in wishlist
        options: [], // option array
        wishlistName: "BookInfo" // name of the wishlist
      },
      filteredItems: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    event.persist();
    this.changeCurrentWishList();
    this.setState({}, function() {
      //Immediately changes state
      this.addCurrent();
      this.handleSave();
    });
  }
  addCurrent() {
    let wishItem = this.props.items.find(
      item => item.id === this.props.items[0].id
    );
    console.log(
      "Added to wishlist",
      wishItem,
      this.state.currentWishlist.items
    );
    let exists = this.state.currentWishlist.items.find(
      item => this.props.items[0].id === item.id
    );
    this.setState(state => {
      if (exists) {
        console.log("Item exists");
      } else {
        this.state.currentWishlist.items.push(wishItem);
      }
    });
  }
  handleSave() {
    this.props.handleSave(this.state.currentWishlist);
  }
  changeCurrentWishList() {
    if (this.state.value === "wishlist") {
      this.setState({ currentWishlist: this.props.wishlist });
    } else if (this.state.value === "wishlist2") {
      this.setState({ currentWishlist: this.props.wishlist2 });
    } else {
      this.setState({ currentWishlist: this.props.wishlist3 });
    }
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

  render() {
    //let authorName = [this.props.items.author_first_name,this.props.items.author_last_name];
    let addedItemID = this.props.items.length ? (
        this.props.items.map(item => {
        libro = item.id;
        return (
          
          <div className="slot" key={item.id}>
            <span href="#tile" className="tile">
              <div className="item">
                <div className="book_cover">
                  {!this.state.showPopup ? (
                    <img
                      src={item.book_cover}
                      alt="bookcover placeholder"
                      width="200"
                      height="200"
                      onClick={() => {
                        this.togglePopup();
                      }}
                    ></img>
                  ) : null}
                  {this.state.showPopup ? (
                    <span
                      onClick={() => {
                        this.togglePopup();
                      }}
                    >
                      <Popup
                        book_cover={item.book_cover}
                        closePopup={this.togglePopup.bind(this)}
                      />
                    </span>
                  ) : null}
                </div>
                <div className="details">
                  <h5 className="book_title">
                    <p>{item.book_name}</p>
                  </h5>
                  <div className="book_details">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Author Bio: {item.author_biography}
                    </h6>
                    <span>
                      Description: {item.book_desc}
                    </span>
                    <br></br>
                    <span className="card-subtitle mb-2 text-muted">
                      Publish Date: {item.book_publishing_info + " "}
                    </span>
                    <br></br>
                    <span className="card-subtitle mb-2 text-muted">
                      Release Date:{item.book_releaseDate}{" "}
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
                        {item.author_first_name + " " + item.author_last_name}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </span>
            <p>
              <b>Price: ${item.book_price}</b>
            </p>

            <Ratingsystem></Ratingsystem>
            <form onSubmit={this.handleSubmit}>
              <label>
                Add to wishlist:
                <select value={this.state.value} onChange={this.handleChange}>
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
              </label>
              <input type="submit" value="Submit" />
            </form>

            <Link to="/#Items">
              <span href="#cart" className="links" type="button">
                Back to Home Page
              </span>
            </Link>

            {this.state.showPopupImg ?  (
            <Popup
            book_cover = {item.book_cover}
            closePopup = {this.togglePopupImg.bind(this)}
          />
         ) : null }
         <br></br>

          </div>
        );
      })
    ) : (
      <div>
        <p>The item you're looking for is no longer here.</p>
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
          <h4>Book Details:</h4>
          <ul className="current-items">{addedItemID}</ul>
        </div>
      </div>
    );
  }
}

const currentItems = state => {
  return {
    items: state.addedItemID,
    catalog: state.items,
    wishlist: state.wishlist,
    wishlist2: state.wishlist2,
    wishlist3: state.wishlist3
  };
};

const changeItems = dispatch => {
  return {
    handleSave: event => {
      dispatch(currentWishName(event)); // dispatch action urrentWishName that will trigger state change.
    },
    sendFilter: event => {
      dispatch(filtered(event));
    }
  };
};
export default connect(currentItems, changeItems)(BookInfo);
export { libro };


