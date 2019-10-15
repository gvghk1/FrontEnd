import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <Link to="/home">
            <a href="#home" className="logo">
              GeekText
            </a>
          </Link>
          <ul className="down" align="down">
            <table className="linkbox">
              <Link to="/home">
                <a href="#home" class="links" type="button">
                  Home
                </a>
              </Link>
              <Link to="/profile">
                <a href="#profile" className="links" type="button">
                  Registration
                </a>
              </Link>
              <Link to="/cart">
                <a href="#cart" className="links" type="button">
                  Cart
                </a>
              </Link>
            </table>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
