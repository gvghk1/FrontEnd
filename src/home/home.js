import React from "react";
import { connect } from "react-redux";
import "./home.css";
import Bookdetails from "../components/Bookdetails/Bookdetails";
import { addItem } from "../components/actions/CartFunctions.js";

class home extends React.Component {
  state = {
    bookdetails: [
      {
        id: 1,
        bookname: "Courage Mountain",
        authorName: "Ferguson Yeomans",
        authorBio:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        bookDescrip:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        bookGenre: "Adventure|Children|Drama",
        book_pub: "Dotted Hawthorn",
        book_rel: "9/12/2018",
        bookRate: "5"
      },
      {
        id: 2,
        bookname: "idk",
        authorName: "person",
        authorBio: "pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        bookDescrip:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        bookGenre: "Adventure|Children|Drama",
        book_pub: "Dotted Hawthorn",
        book_rel: "9/12/2018",
        bookRate: "5"
      }
    ]
  };

  clickOn = id => {
    this.props.addItem(id);
  };

  itemList = this.props.items.map(item => {
    return (
      <div className="slot" key={item.id}>
        <b>
          <span className="title">{item.bookname}</span>
        </b>
        <p>{item.authorName}</p>
        <div className="image">
          <img src={item.img} alt={item.bookname} />
        </div>
        <div className="description">
          <p>{item.bookDescrip}</p>
          <p>
            <i>Price: ${item.price} </i>
            <span
              className="clickAddButton"
              onClick={() => {
                this.clickOn(item.id);
              }}
            >
              <button className="addButton">Add</button>
            </span>
          </p>
        </div>
      </div>
    );
  });

  styling = {
    textAlign: "center"
  };

  render() {
    return (
      <div className="App" style={this.styling}>
        <h3>Home Page</h3>
        <Bookdetails bookdetails={this.state.bookdetails} />
        <p href="#Items">
          By the wonderful people how bought you Wisdom Valley:
        </p>
        <div className="box">{this.itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const checkCartReducer = dispatch => {
  return {
    addItem: id => {
      dispatch(addItem(id));
    }
  };
};

export default connect(
  mapStateToProps,
  checkCartReducer
)(home);
