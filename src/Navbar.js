import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "#39D1B4"
        }}
        class="navbar"
      >
        <div className="container">
          <Link to="/home">
            <a href="#home" class="logo">
              GeekText
            </a>
          </Link>
          <ul className="down" align="down">
            <table class="linkbox">
              <Link to="/home">
                <a href="#home" class="links" type="button">
                  Home
                </a>
              </Link>
              <Link to="/profile">
                <a href="#profile" class="links" type="button">
                  Profile
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
