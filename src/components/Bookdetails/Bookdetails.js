import React from "react";
import Bookitem from "../BookItem/BookItem";

class Bookdetails extends React.Component {
  render() {
    return this.props.bookdetails.map(book => (
      <div className="bookitem">
        <Bookitem key={book.id} book={book} />
      </div>
    ));
  }
}

export default Bookdetails;
