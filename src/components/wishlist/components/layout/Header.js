import React from 'react'
import { Link } from  'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Wishlist</h1>
            <Link to="/">Home</Link> | <Link to="/TestCart">Shopping Cart</Link>
        </header>
    )
}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header;