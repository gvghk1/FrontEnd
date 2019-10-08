import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ background: "#39D1B4" }} className="navbar">
        <div className="container">
          <h1>GeekText</h1>
          <ul className="right">
            <li>
              <Link to="/">
                <i href="#home">Home Link</i>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i href="#cart">Cart Link</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
