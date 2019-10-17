import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import home from "./home/home";
import Cart from "./components/Cart/Cart";
import Registration from "./components/Registration(Profile Mgmt)/Registration";
import BookInfo from "./components/Bookdetails/BookInfo.js";
import Wishlist from "./components/wishlist/Wishlist.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/home" component={home} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={Registration} />
            <Route path="/details" component={BookInfo} />
            <Route path="/list" component={Wishlist} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
