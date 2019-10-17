import React from 'react';
import BookItems from './BookItems';
import PropTypes from 'prop-types';

class Books extends React.Component {
  
  render() {
    return this.props.books.map((books) => 
          (<BookItems key={books.id} books={books}/>
       
      )
      );
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;
