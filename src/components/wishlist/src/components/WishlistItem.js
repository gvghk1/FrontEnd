import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class WishlistItem extends Component {
    getStyle = () => {
            return{
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.wishlist.completed ? 
                'line-through' : 'none' 
            }
    }
    

    render() {
        const { id, title } = this.props.wishlist;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                <button onClick={this.props.delWishlistItem.bind(this, id)} 
                                                style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// Props Type
WishlistItem.propTypes = {
    wishlist: PropTypes.object.isRequired
  }

  const btnStyle = {
      background: '#fff',
      color: 'none',
      border: 'none',
      padding: '5px 8px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }
export default WishlistItem
