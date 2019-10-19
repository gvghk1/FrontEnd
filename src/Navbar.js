import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <Link to="/home">
            <span href="#home" className="logo">
              GeekText
            </span>
          </Link>
          <div className="linkbox" align="down">
            <Link to="/home">
              <span href="#home" className="links" type="button">
                Home
              </span>
            </Link>
            <Link to="/profile">
              <span href="#profile" className="links" type="button">
                Registration
              </span>
            </Link>
            <Link to="/list">
              <span href="#list" className="links" type="button">
                Wishlist
              </span>
            </Link>
            <Link to="/cart">
              <span href="#cart" className="links" type="button">
                Cart
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
