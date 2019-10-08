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
          <h6 className="card-subtitle mb-2 text-muted">
            Author Bio: {this.props.book.author_biography}
          </h6>
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
