import React from "react";
import "./Cart.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <br></br>
          <p>{this.props.text}</p>
          <div className="container"></div>
          <button className="popup-button" onClick={this.props.closePopup}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
