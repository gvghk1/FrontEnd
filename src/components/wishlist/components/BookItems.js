import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BookItems extends Component {
    render() {
        return (
            <div style={  {backgroundColor: '#f4f4f4', padding: '10px', borderBottom: '1px #ccc dotted'}  }>
                <p>
                { this.props.books.name}
                </p>
                
            </div>
        )
    }
}

BookItems.propTypes = {
    books: PropTypes.object.isRequired
  }


export default BookItems
