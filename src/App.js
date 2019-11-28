import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import home from "./home/home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import Register from "./components/Registration(Profile Mgmt)/Registration";
import BookInfo from "./components/Bookdetails/BookInfo.js";
import Searched from "./components/Bookdetails/Searched";
import Wishlist from "./components/wishlist/Wishlist.js";
import Login from "./components/Registration(Profile Mgmt)/LoginPage";

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
            <Route path="/checkout" component={Checkout} />
            <Route path="/profile" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={BookInfo} />
            <Route path="/search" component={Searched} />
            <Route path="/list" component={Wishlist} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
