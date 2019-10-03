import React from 'react';
import Bookitem from './Bookitem';

class Bookdetails extends React.Component {
  render(){
  return this.props.bookdetails.map((book)=>(
      <Bookitem key = {book.id} book = {book}/>
  ));
}
}

export default Bookdetails;
