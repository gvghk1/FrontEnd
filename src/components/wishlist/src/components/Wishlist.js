import React, { Component } from 'react';
import WishlistItem from './WishlistItem';
import PropTypes from 'prop-types';


class Wishlist extends React.Component {

  render(){

    return this.props.wishlist.map((wishlist) => (
      <WishlistItem key={wishlist.id} wishlist={wishlist} markComplete={this.props.markComplete} 
      delWishlistItem={this.props.delWishlistItem} />
    ));
  }
  
}

Wishlist.propTypes = {
  wishlist: PropTypes.array.isRequired
}
export default Wishlist;
