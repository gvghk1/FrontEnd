import React from "react";
import Bookitem from "../BookItem/BookItem";
import { connect } from "react-redux";

class Bookdetails extends React.Component {
  componentDidCatch(error) {
    return this.props.bookdetails.map(book => (
      <div className="bookitem">
        <Bookitem key={book.id} book={book} />
      </div>
    ));
  }
  render() {
    let currentlist = this.props.filteredItems.length
      ? this.props.filteredItems.map(book => {
          return (
            <div className="bookitem" key={book.id}>
              <Bookitem key={book.id} book={book} />
            </div>
          );
        })
      : this.props.bookdetails.map(book => (
          <div className="bookitem" key={book.id}>
            <Bookitem key={book.id} book={book} />
          </div>
        ));
    try {
      return currentlist;
    } catch (error) {
      console.error(error);
    }
  }
}
const currentItems = state => {
  return {
    filteredItems: state.filteredItems
  };
};
export default connect(currentItems)(Bookdetails);
//hi
