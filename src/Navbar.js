import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ background: "#39D1B4" }} className="navbar">
        <div className="container">
          <Link to="/">
            <a href="#home" class="logo">
              GeekText
            </a>
          </Link>
          <ul className="left">
            For Testing Purposes
            <li>
              <Link to="/profile">
                <i href="#profile">profile management</i>
              </Link>
            </li>
          </ul>
          <ul className="downn" align="down">
            <table class="myButton">
              <Link to="/">
                <a href="#home" class="links" type="button">
                  Home
                </a>
              </Link>
              <Link to="/cart">
                <a href="#cart" class="links" type="button">
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
