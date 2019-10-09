import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../Cart/CartFunctions";

export class Bookitem extends Component {
  // style= {"width": "18rem"}

  clickOn = id => {
    this.props.addItem(id);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Book Name: {this.props.book.book_name}</h5>
          <br></br><img src={this.props.book.book_cover} alt="bookcover placeholder" width="100" height="100"></img>
          <h6 className="card-subtitle mb-2 text-muted">
            Author Bio: {this.props.book.author_biography}
          </h6>
          <h7 className ="card-subtitle mb-2 text-muted">Publish Date: {this.props.book.book_publishing_info + " "}</h7>
          <h8 className = "card-subtitle mb-2 text-muted">Release Date:{this.props.book.book_releaseDate} </h8>
          <br></br><h9 className = "card-subtitle mb-2 text-muted">Genre: {this.props.book.book_genre}  </h9>
          <br></br><h9 class name = "card-subtitle mb-2 text-muted">Rating: {this.props.book.book_rating}</h9>
          <br></br><h10 className = "card-text"> Publisher: {this.props.book.book_publisher}</h10>
          <p className="card-text">
            Author Name:{" "}
            {this.props.book.author_first_name +
              " " +
              this.props.book.author_last_name}
          </p>
          <i>Price: ${this.props.book.book_price} </i>
          <span
            className="clickAddButton"
            onClick={() => {
              this.clickOn(this.props.book.id);
            }}
          >
            <button className="addButton">Add</button>
          </span>
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
    }
  };
};

export default connect(
  mapStateToProps,
  checkCartReducer
)(Bookitem);
