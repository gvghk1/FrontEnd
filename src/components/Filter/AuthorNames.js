import React from "react";

class AuthorNames extends React.Component {
  render() {
    try {
      return this.props.bookdetails.map(book => (
        <option
          key={book.id}
          value={[book.author_first_name, book.author_last_name]}
        >
          {book.author_first_name} {book.author_last_name}
        </option>
      ));
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthorNames;
